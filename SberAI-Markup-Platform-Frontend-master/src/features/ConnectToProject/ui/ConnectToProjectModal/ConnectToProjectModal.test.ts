import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { componentRender } from '@/shared/lib/tests/componentRender'
import ConnectToProjectModal from './ConnectToProjectModal.vue'
import { fireEvent } from '@testing-library/vue'
import { useConnectToProjectStore } from '../../model/store/connectToProjectStore'

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
  connectToProject: {
    code: '',
    password: ''
  }
}

describe('feature/ConnectToProjectModal', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  test('code and password fields should be saved', async () => {
    const { getByTestId } = componentRender(ConnectToProjectModal, initialState, {
      isOpen: false,
      onClose: () => {}
    })
    const codeInput = getByTestId('ConnectToProject.code')
    const passwordInput = getByTestId('ConnectToProject.password')
    await fireEvent.update(codeInput, 'PRJA')
    await fireEvent.update(passwordInput, '123123')
    const connectToProjectStore = useConnectToProjectStore()

    expect(connectToProjectStore.code).toBe('PRJA')
    expect(connectToProjectStore.password).toBe('123123')
  })
})
