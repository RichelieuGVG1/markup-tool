<script setup lang="ts">
import AppModal from '@/shared/ui/Modals/AppModal.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import AppInput from '@/shared/ui/AppInput/AppInput.vue'
import { useConnectToProjectStore } from '../../model/store/connectToProjectStore'
import { NotificationType, useNotificationStore } from '@/entities/Notification'
interface ConnectToProjectModalProps {
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
}

const props = defineProps<ConnectToProjectModalProps>()

const connectToProjectStore = useConnectToProjectStore()
const { addNotification } = useNotificationStore()
const connectToProject = async () => {
  if (connectToProjectStore.code && connectToProjectStore.password) {
    await connectToProjectStore.connectToProject()
    if (!connectToProjectStore.error) {
      props.onClose()
      connectToProjectStore.$reset()
    }
  } else {
    addNotification({
      message: 'Заполните поля',
      notificationType: NotificationType.ERROR
    })
  }
}
</script>

<template>
  <AppModal :open="isOpen" :on-close="onClose">
    <VStack class="modal" max gap="30">
      <AppText variant="accent" weight="600">Присоединиться к проекту</AppText>
      <hr class="line" />
      <AppInput
        data-test-id="ConnectToProject.code"
        v-model="connectToProjectStore.code"
        label="Код проекта"
      />
      <AppInput
        data-test-id="ConnectToProject.password"
        v-model="connectToProjectStore.password"
        type="password"
        label="Пароль проекта:"
      />
      <AppButton size="m" @click="connectToProject"> Приступить </AppButton>
    </VStack>
  </AppModal>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.modal {
  width: 360px;

  @include mobile {
    width: auto;
  }
}

.line {
  width: 100%;
  height: 1px;
  background: var(--hint-color-muted);
  border: none;
}
</style>
