import type { NotificationType } from '../const/notificationType'

export interface Notification {
  id: number
  notificationType: NotificationType
  message: string
}

export interface NotificationState {
  notifications: Notification[]
}
