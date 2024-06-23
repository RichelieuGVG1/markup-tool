<script setup lang="ts">
import AppCheckbox from '@/shared/ui/AppCheckbox/AppCheckbox.vue'
interface AnswerVariantsProps {
  modelValue?: boolean
  onChange: (value: boolean) => void
}
defineProps<AnswerVariantsProps>()
</script>

<template>
  <AppCheckbox
    class="auto-fill"
    label="Автоответ"
    :model-value="modelValue"
    @update:model-value="onChange"
  />
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.auto-fill {
  padding: 8px 25px;
  background: var(--gray-secondary);
  border-radius: 32px 32px 0 0;
  cursor: pointer;
  @include mobile {
    padding: 10px 20px;
  }
}
</style>
