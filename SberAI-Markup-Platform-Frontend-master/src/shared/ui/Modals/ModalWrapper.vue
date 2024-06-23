<script setup lang="ts">
import classes from './Modal.module.scss'
import AppOverlay from '../Overlay/AppOverlay.vue'

interface ModalWrapperProps {
  open?: boolean
  onClose?: () => void
}
defineProps<ModalWrapperProps>()
</script>

<template>
  <teleport to="body">
    <div :class="[classes.Modal, { [classes.opened]: open }]">
      <AppOverlay :on-click="onClose" />
      <slot />
    </div>
  </teleport>
</template>

<style scoped lang="scss"></style>
