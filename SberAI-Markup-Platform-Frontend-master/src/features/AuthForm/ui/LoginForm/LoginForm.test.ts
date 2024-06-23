import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest'
import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/vue'
import { componentRender } from '@/shared/lib/tests/componentRender'
import LoginForm from './LoginForm.vue'
import { useAuthFormStore } from '../../model/store/authForm'
import { AuthForm } from '../../const/const'
import type { User } from '@/entities/User'
import { useUserStore } from '@/entities/User'
import { useNotificationStore } from '@/entities/Notification'
import { AxiosError } from 'axios'

const mocks = vi.hoisted(() => ({
  get: vi.fn(),
  post: vi.fn()
}))

vi.mock('axios', async () => {
  const actual = await vi.importActual<typeof import('axios')>('axios')

  const mockAxios = {
    ...actual,
    default: {
      ...actual.default,
      create: vi.fn(() => ({
        ...actual.default.create(),
        get: mocks.get,
        post: mocks.post
      }))
    }
  }

  return mockAxios
})

const initialState = {
  authForm: {
    loginForm: {
      email: '',
      password: ''
    }
  }
}

describe('feature/LoginForm', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  test('email filed should be saved into store', async () => {
    const { getByTestId } = componentRender(LoginForm, initialState, {
      formType: AuthForm.LOGIN
    })
    const authStore = useAuthFormStore()
    const emailInput = getByTestId('LoginForm.input')
    await fireEvent.update(emailInput, 'test@test.ru')
    expect(authStore.loginForm.email).toBe('test@test.ru')
  })
  test('user successfully received', async () => {
    const { getByTestId } = componentRender(LoginForm, initialState, {
      formType: AuthForm.LOGIN
    })
    const mockedUserData: User = {
      ID: 1,
      first_name: 'first',
      last_name: 'last',
      is_admin: false,
      completed_tasks: 1,
      reg_date: '',
      email: ''
    }

    mocks.post.mockResolvedValue({
      data: mockedUserData
    })
    const userStore = useUserStore()
    const emailInput = getByTestId('LoginForm.input')
    const passwordInput = getByTestId('LoginForm.password')

    const loginBtn = getByTestId('LoginForm.loginBtn')
    await fireEvent.update(emailInput, 'test@test.ru')
    await fireEvent.update(passwordInput, '123456')
    await fireEvent.click(loginBtn)

    const loader = getByTestId('Button.Loader')

    expect(loader).toBeDefined()

    await waitForElementToBeRemoved(loader)

    expect(mocks.post).toHaveBeenCalled()
    expect(userStore.userData).toStrictEqual(mockedUserData)
  })
  test('no data error, appropriate notification should be added', async () => {
    const { getByTestId } = componentRender(LoginForm, initialState, {
      formType: AuthForm.LOGIN
    })
    const notificationStore = useNotificationStore()
    const loginBtn = getByTestId('LoginForm.loginBtn')
    await fireEvent.click(loginBtn)

    expect(notificationStore.notifications.length).not.toBe(0)
    expect(notificationStore.notifications[0].message).toBe('Заполните все поля')
  })
  test('incorrect credentials error, appropriate notification should be added', async () => {
    const initialState = {
      authForm: {
        loginForm: {
          email: 'test@test.ru',
          password: '123123'
        }
      }
    }
    const { getByTestId } = componentRender(LoginForm, initialState, {
      formType: AuthForm.LOGIN
    })
    const axiosError = Object.create(new AxiosError())
    axiosError.response = {
      data: {
        error: JSON.stringify({
          name: 'errIncorrectEmailOrPassword'
        })
      }
    }
    mocks.post.mockRejectedValue(axiosError)
    const notificationStore = useNotificationStore()

    const loginBtn = getByTestId('LoginForm.loginBtn')
    await fireEvent.click(loginBtn)
    await waitForElementToBeRemoved(() => getByTestId('Button.Loader'))

    // expect(authState.validationErrors.length).toBe(1)
    expect(notificationStore.notifications.length).not.toBe(0)
    expect(notificationStore.notifications[0].message).toBe('Неверное имя пользователя или пароль')
  })
})
