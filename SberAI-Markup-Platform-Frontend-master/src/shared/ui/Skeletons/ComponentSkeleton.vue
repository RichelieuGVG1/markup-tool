<script setup lang="ts">
import AppSkeleton from './AppSkeleton.vue'
</script>

<template>
  <AppSkeleton class="component-skeleton" />
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.component-skeleton {
  width: 100%;
  height: 525px;
  border-radius: 20px;
}
@include mobile {
  .component-skeleton {
    height: 325px;
  }
}
</style>
