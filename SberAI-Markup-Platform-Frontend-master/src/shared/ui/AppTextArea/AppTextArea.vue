<script setup lang="ts">
import { type PropType } from 'vue'

type BackgroundType = 'transparent' | 'filled'

defineProps({
  backgroundType: {
    type: String as PropType<BackgroundType>,
    default: 'transparent'
  },
  placeholder: {
    type: String
  },
  modelValue: [String, Number]
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <textarea
    :value="modelValue"
    @input="updateInput"
    :class="['textarea', backgroundType]"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.textarea {
  resize: none;
  outline: none;
  &::-webkit-scrollbar {
    width: 3px;
    background: var(--gray-secondary);
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background: var(--gray-primary);
  }
}

.transparent {
  border-radius: 15px;
  border: 3px solid #505050;
  background-color: transparent;
  color: var(--text-color);
  resize: vertical;
}

.filled {
  border-radius: 0 23px 23px 23px;
  border: 1px solid var(--hint-color-muted);
  background-color: var(--gray-secondary);
  color: var(--text-color);
  width: 100%;
  height: 475px;
  padding: 25px;

  &::placeholder {
    color: var(--hint-color);
  }

  @include mobile {
    border-radius: 0 0 23px 23px;
    height: 280px;
    font-size: var(--font-size-s);
  }
}
</style>
