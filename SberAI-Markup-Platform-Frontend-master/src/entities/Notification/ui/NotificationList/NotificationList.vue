<script setup lang="ts">
import { useNotificationStore } from '../../model/store/notificationStore'
import AppNotification from '../AppNotification/AppNotification.vue'
import { getVStack } from '@/shared/lib/helpers/getVStack'

const notificationStore = useNotificationStore()
</script>

<template>
  <transition-group
    :class="['notification-list', getVStack({ gap: '10', align: 'end' })]"
    tag="div"
    name="list"
  >
    <AppNotification
      data-testid="Notification"
      v-for="notification in notificationStore.lastThreeNotification"
      :key="notification.id"
      :notification="notification"
    />
  </transition-group>
</template>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.notification-list {
  position: fixed;
  z-index: 150;
  bottom: 30px;
  right: 30px;
}
</style>
