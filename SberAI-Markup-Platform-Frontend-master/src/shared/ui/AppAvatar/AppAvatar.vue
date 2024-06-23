<script setup lang="ts">
import { computed } from 'vue'

interface AppAvatarProps {
  src: string
  size: number
}

const props = withDefaults(defineProps<AppAvatarProps>(), {
  size: 45
})

const style = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px'
  }
})
</script>

<template>
  <img class="avatar" :src="src" alt="avatar" :style="style" />
</template>

<style scoped lang="scss">
.avatar {
  border-radius: 50%;
  object-fit: cover;
}
</style>
