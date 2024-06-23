<script setup lang="ts">
import ModalWrapper from './ModalWrapper.vue'
interface FullScreenImageProps {
  open?: boolean
  onClose?: () => void
  image: string
}
defineProps<FullScreenImageProps>()
</script>

<template>
  <ModalWrapper :open="open" :on-close="onClose">
    <img class="image" :src="image" alt="full-screen" />
  </ModalWrapper>
</template>

<style scoped lang="scss">
.image {
  max-width: 80%;
  max-height: 90%;
}
</style>
