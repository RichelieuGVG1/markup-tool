import { defineStore } from 'pinia'
import type { NotificationState, Notification } from '../types/notification'

export const useNotificationStore = defineStore('notification', {
  state: (): NotificationState => ({
    notifications: []
  }),
  getters: {
    lastThreeNotification: (state) => {
      return state.notifications.slice(-3)
    }
  },
  actions: {
    addNotification(notification: Omit<Notification, 'id'>) {
      const existingNotification = this.notifications.find(
        (item) => item.message === notification.message
      )
      if (!existingNotification) {
        this.notifications.push({
          id: this.notifications.length,
          ...notification
        })
      }
    },
    removeNotification(removeId: number) {
      this.notifications = this.notifications.filter((item) => item.id !== removeId)
    }
  }
})
