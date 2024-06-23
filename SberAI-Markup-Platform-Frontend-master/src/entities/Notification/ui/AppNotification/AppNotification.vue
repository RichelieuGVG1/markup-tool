<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'

import type { Notification } from '../../model/types/notification'
import { useNotificationStore } from '../../model/store/notificationStore'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { computed, onMounted } from 'vue'
import { notificationLayoutMapper } from '../../const/notificationLayoutMapper'

interface AppNotification {
  notification: Notification
}
const props = defineProps<AppNotification>()
const notificationStore = useNotificationStore()
const layoutStyle = computed(() => notificationLayoutMapper[props.notification.notificationType])

onMounted(() => {
  setTimeout(() => {
    notificationStore.removeNotification(props.notification.id)
  }, 5000)
})
</script>

<template>
  <HStack
    align="center"
    justify="start"
    gap="24"
    :style="{ background: layoutStyle.background }"
    :class="['notification']"
  >
    <div :style="{ background: layoutStyle.markerColor }" class="marker"></div>
    <HStack gap="10">
      <component class="icon" :is="layoutStyle.icon" />
      <AppText size="m" weight="600" :variant="layoutStyle.textColor">{{
        notification.message
      }}</AppText>
    </HStack>
  </HStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.notification {
  border-radius: 15px;
  min-width: 350px;
  height: 75px;
  padding-right: 15px;
  overflow: hidden;
}

.success {
  background: var(--accent-color);
}

.error {
  background: var(--error-color);
}

.icon {
  width: 40px;
  height: 40px;
}

.close {
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
}

.marker {
  width: 20px;
  height: 100%;
}

@include mobile {
  .notification {
    min-width: 300px;
    height: 65px;
  }
}
</style>
