import { defineStore } from 'pinia'
import type { AuthState } from '../types/authState'
import AuthService from '../services/AuthService/AuthService'
import { useUserStore } from '@/entities/User'
import { AxiosError } from 'axios'
import { ValidateAuthData } from '../services/ValidateAuthData/ValidateAuthData'
import { NotificationType, useNotificationStore } from '@/entities/Notification'
import { ValidationErrors, validationErrorsMapper } from '../../const/const'

export const useAuthFormStore = defineStore('authForm', {
  state: (): AuthState => ({
    loginForm: {
      email: '',
      password: ''
    },
    registerForm: {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    },
    isLoading: false,
    error: null,
    validationErrors: []
  }),
  actions: {
    async login() {
      const userStore = useUserStore()
      const notificationStore = useNotificationStore()
      this.validationErrors = ValidateAuthData(this.loginForm)
      if (!this.validationErrors.length) {
        try {
          this.isLoading = true

          const response = await AuthService.login(this.loginForm.email, this.loginForm.password)
          userStore.userData = response.data
          this.$reset()
        } catch (e) {
          if (e instanceof AxiosError) {
            const axiosError = JSON.parse(e.response?.data?.error)
            this.validationErrors.push(axiosError.name)
            notificationStore.addNotification({
              message: validationErrorsMapper[this.validationErrors[0]],
              notificationType: NotificationType.ERROR
            })
          }
        } finally {
          this.isLoading = false
        }
      } else {
        notificationStore.addNotification({
          message: validationErrorsMapper[this.validationErrors[0]],
          notificationType: NotificationType.ERROR
        })
      }
    },
    async register() {
      const userStore = useUserStore()
      const notificationStore = useNotificationStore()
      this.validationErrors = ValidateAuthData(this.registerForm)

      if (!this.validationErrors.length) {
        try {
          this.isLoading = true
          const response = await AuthService.registration(
            this.registerForm.email,
            this.registerForm.password,
            this.registerForm.first_name,
            this.registerForm.last_name
          )
          userStore.userData = response.data
          this.$reset()
        } catch (e) {
          if (e instanceof AxiosError) {
            const axiosError = JSON.parse(e.response?.data?.error)
            this.validationErrors.push(axiosError.name)
            notificationStore.addNotification({
              message: validationErrorsMapper[this.validationErrors[0]],
              notificationType: NotificationType.ERROR
            })
          }
        } finally {
          this.isLoading = false
        }
      } else {
        notificationStore.addNotification({
          message: validationErrorsMapper[this.validationErrors[0]],
          notificationType: NotificationType.ERROR
        })
      }
    },
    async logout() {
      const userStore = useUserStore()

      try {
        this.isLoading = true
        await AuthService.logout()
        userStore.userData = null
      } catch (e) {
        if (e instanceof AxiosError) {
          this.error = e.response?.data?.error
        } else {
          console.log(e)
        }
      } finally {
        this.isLoading = false
      }
    },
    clearError() {
      this.error = null
    }
  }
})
