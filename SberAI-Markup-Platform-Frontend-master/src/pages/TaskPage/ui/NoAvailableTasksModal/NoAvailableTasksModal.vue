<script setup lang="ts">
import AppModal from '@/shared/ui/Modals/AppModal.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

import { routes } from '@/shared/const/routes'

interface NoAvailableTasksModalProps {
  isOpen: boolean
  onClose: () => void
}
defineProps<NoAvailableTasksModalProps>()
</script>

<template>
  <AppModal :on-close="onClose" :open="isOpen">
    <VStack gap="24">
      <AppText weight="600" variant="accent" size="xl">Спасибо!</AppText>
      <hr class="line" />
      <AppText size="l">Вы выполнили все задания в этом проекте!</AppText>
      <AppButton button-tag="link" :to="routes.projects()">На главную</AppButton>
    </VStack>
  </AppModal>
</template>

<style scoped lang="scss">
.line {
  width: 100%;
  height: 3px;
  background: var(--hint-color-muted);
  border: none;
  border-radius: 3px;
}
</style>
