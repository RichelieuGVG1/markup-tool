<script setup lang="ts">
import AppModal from '@/shared/ui/Modals/AppModal.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

interface ApproveAnswerModalProps {
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
  onApprove: () => void
}
defineProps<ApproveAnswerModalProps>()
</script>

<template>
  <AppModal :open="isOpen" :on-close="onClose">
    <VStack gap="24">
      <AppText>Вы уверены ?</AppText>
      <HStack gap="10">
        <AppButton size="xs" @click="onApprove">Да</AppButton>
        <AppButton size="xs" @click="onClose">Нет</AppButton>
      </HStack>
    </VStack>
  </AppModal>
</template>

<style scoped lang="scss"></style>
