import { NotificationType } from '../model/const/notificationType'
import SuccessIcon from '@/shared/assets/icons/check.svg'
import ErrorIcon from '@/shared/assets/icons/cancel.svg'
import WarningIcon from '@/shared/assets/icons/warning.svg'
import type { TextVariant } from '@/shared/types/textTypes'

export const notificationLayoutMapper: Record<
  NotificationType,
  { icon: string; textColor: TextVariant; markerColor: string; background: string }
> = {
  [NotificationType.ERROR]: {
    icon: ErrorIcon,
    textColor: 'error',
    markerColor: '#B00',
    background: '#FF8787'
  },
  [NotificationType.WARNING]: {
    icon: WarningIcon,
    textColor: 'warning',
    markerColor: '#E59700',
    background: '#FFD98F'
  },
  [NotificationType.SUCCESS]: {
    icon: SuccessIcon,
    textColor: 'accent',
    markerColor: '#21A049',
    background: '#84FFAB'
  }
}
