<script setup lang="ts">
import AppText from '../TextViews/AppText/AppText.vue'

defineProps({
  name: String
})
</script>

<template>
  <div class="component-name">
    <AppText>
      {{ name }}
    </AppText>
  </div>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.component-name {
  padding: 10px 35px;
  border-radius: 32px 32px 0 0;
  background: var(--gray-secondary);
  @include mobile {
    max-width: 260px;
  }
}
</style>
