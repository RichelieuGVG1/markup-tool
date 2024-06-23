<script setup lang="ts">
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppModal from '@/shared/ui/Modals/AppModal.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'

interface ApproveAutoFillModalProps {
  isLoading?: boolean
  isOpen: boolean
  onClose: () => void
}
const props = defineProps<ApproveAutoFillModalProps>()
const emits = defineEmits(['onApprove'])

const onApproveAuto = () => {
  props.onClose()
  emits('onApprove')
}
</script>

<template>
  <AppModal :open="isOpen" :on-close="onClose">
    <VStack gap="24">
      <AppText class="modal-text" align="center"
        >Будьте внимательны, ваш текущий текст будет заменен</AppText
      >
      <HStack gap="10">
        <AppButton size="xs" @click="onApproveAuto">Хорошо</AppButton>
        <AppButton size="xs" @click="onClose">Отменить</AppButton>
      </HStack>
    </VStack>
  </AppModal>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.modal-text {
  width: 310px;
  @include mobile {
    width: auto;
  }
}
</style>
