<script setup lang="ts">
defineProps({
  left: {
    type: String,
    default: 'auto'
  },
  top: {
    type: String,
    default: 'auto'
  },
  right: {
    type: String,
    default: 'auto'
  },
  bottom: {
    type: String,
    default: 'auto'
  }
})
</script>

<template>
  <div class="light" :style="{ left, top, bottom, right }" />
</template>

<style scoped lang="scss">
.light {
  position: absolute;
  width: 550px;
  height: 550px;
  background: var(--accent-color);
  filter: blur(125px);
}
</style>
