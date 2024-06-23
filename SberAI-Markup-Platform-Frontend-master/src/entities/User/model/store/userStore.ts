import { defineStore } from 'pinia'
import type { User, UserState } from '../types/user'
import $api from '@/shared/api/api'

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    userData: null,
    mounted: false,
    isLoading: false
  }),
  getters: {
    getTextRole: (state) => {
      return state.userData?.is_admin ? 'Администратор' : 'Разметчик'
    },
    getUserFullName: (state) => {
      return `${state.userData?.first_name} ${state.userData?.last_name}`
    }
  },
  actions: {
    async initAuthData() {
      try {
        this.isLoading = true
        const response = await $api.get<User>('users/info/personal')
        this.userData = response.data
      } catch (e) {
        console.log(e)
      } finally {
        this.mounted = true
        this.isLoading = false
      }
    }
  }
})
