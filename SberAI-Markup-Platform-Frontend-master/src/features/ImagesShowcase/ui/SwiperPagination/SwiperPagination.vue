<script setup lang="ts">
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'

interface SwiperPaginationProps {
  imageLength: number
  currentIndex: number
}
defineProps<SwiperPaginationProps>()
</script>

<template>
  <HStack gap="10" justify="center" class="pagination">
    <span
      v-for="(n, index) in imageLength"
      :key="index"
      :class="['bullet', { 'bullet-active': index === currentIndex }]"
    ></span>
  </HStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.pagination {
  margin-top: 20px;
  @include mobile {
    margin-top: 0;
  }
}

.bullet {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--gray-secondary);
}

.bullet-active {
  background: var(--accent-color);
}
</style>
