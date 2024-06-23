<script lang="ts" setup>
import { getHStack } from '@/shared/lib/helpers/getHStack'
import { computed } from 'vue'
import { isMobile } from 'mobile-device-detect'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  value: {
    type: String
  },
  label: {
    type: String,
    default: ''
  },
  small: {
    type: Boolean,
    default: false
  }
})

const handleClick = (event: Event) => {
  emits('update:modelValue', (event.target as HTMLInputElement).value)
}

const isChecked = computed(() => props.modelValue === props.value)
</script>

<template>
  <label
    :class="[
      getHStack({ gap: isMobile ? '16' : '24', align: small ? 'start' : 'center' }),
      { small }
    ]"
  >
    <input
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="handleClick"
      class="real-radio-btn"
    />
    <span class="custom-radio-btn"></span>
    <span class="input_text">{{ label }}</span>
  </label>
</template>

<style lang="scss" scoped>
@import '@/shared/styles/mixins';
.custom-radio-btn {
  position: relative;
  display: inline-block;
  min-width: 36px;
  min-height: 36px;
  border: 3px solid var(--text-color);
  border-radius: 10px;
  vertical-align: text-top;

  &::before {
    content: '';
    display: inline-block;
    min-width: 23px;
    min-height: 23px;
    background-color: var(--text-color);
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: 0.2s ease-in;
  }
}

.real-radio-btn {
  width: 0;
  height: 0;
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.real-radio-btn:checked + .custom-radio-btn::before {
  transform: translate(-50%, -50%) scale(1);
}

.input_text {
  color: var(--text-color);
  font-size: 24px;
  font-weight: 500;
}

.small {
  .input_text {
    font-size: 20px;
  }

  .custom-radio-btn {
    min-width: 28px;
    min-height: 28px;
    border-radius: 10px;
    &:before {
      min-width: 16px;
      min-height: 16px;
    }
  }
}

@include mobile {
  .input_text {
    font-size: 14px;
  }

  .custom-radio-btn {
    min-width: 20px;
    min-height: 20px;
    border-radius: 5px;
    border: 1px solid var(--text-color);

    &::before {
      width: 12px;
      height: 12px;
      border-radius: 3px;
    }
  }

  .small {
    .input_text {
      font-size: 14px;
    }
    .custom-radio-btn {
      min-width: 20px;
      min-height: 20px;
      border-radius: 5px;
      border: 1px solid var(--text-color);

      &::before {
        min-width: 12px;
        min-height: 12px;
        border-radius: 3px;
      }
    }
  }
}
</style>
