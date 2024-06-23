<script setup lang="ts">
import Loader from '@/shared/assets/icons/loader.svg'

import { computed } from 'vue'

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'custom'
type ButtonColor = 'primary' | 'muted' | 'gray'
type ButtonBorder = 'normal' | 'dashed'
type ButtonType = 'button' | 'link'
type ButtonBorderRadius = 'normal-radius' | 'custom-radius'

interface BaseAppButtonProps {
  disabled?: boolean
  isLoading?: boolean
  fullRound?: boolean
  color?: ButtonColor
  size?: ButtonSize
  border?: ButtonBorder
  borderRadius?: ButtonBorderRadius
  buttonTag?: ButtonType
  selected?: boolean
  max?: boolean
  to?: string
  dataTestId?: string
}

interface ButtonProps extends BaseAppButtonProps {
  buttonTag?: 'button'
}

interface LinkProps extends BaseAppButtonProps {
  buttonTag?: 'link'
  to: string
}

const props = withDefaults(defineProps<LinkProps | ButtonProps>(), {
  disabled: false,
  isLoading: false,
  fullRound: false,
  selected: false,
  borderRadius: 'normal-radius',
  color: 'primary',
  size: 'm',
  max: false,
  buttonTag: 'button',
  border: 'normal'
})

const classes = computed(() => [
  'Button',
  props.color,
  props.size,
  props.borderRadius,
  { 'full-round': props.fullRound },
  { disabled: props.disabled },
  { selected: props.selected },
  { max: props.max },
  props.border
])
</script>

<template>
  <button
    v-if="buttonTag === 'button'"
    :data-testid="dataTestId"
    :disabled="disabled"
    :class="classes"
  >
    <Loader data-testid="Button.Loader" height="100%" v-if="isLoading" />
    <slot v-else />
  </button>
  <router-link v-else :to="to" :class="classes">
    <slot />
  </router-link>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.Button {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: var(--font-size-m);
  font-weight: 400;
  padding: 10px 15px;
  border: none;
  outline: none;
  transition: background 0.3s;
}

.normal-radius {
  border-radius: 22.5px;
}

.full-round {
  border-radius: 50%;
}

.primary {
  background: var(--accent-color);
  color: var(--text-color);

  &:hover {
    background: var(--accent-color-muted);
  }
}

.muted {
  background: var(--accent-color-super-muted);
  color: var(--text-color);
}

.gray {
  background: var(--gray-primary);
  color: var(--text-color);

  &:hover {
    background: #2e2e2e;
  }

  &.selected {
    background-color: var(--accent-color);
  }

  &.disabled {
    opacity: 0.7;
  }
}

.xs {
  height: 35px;
  width: 150px;
  font-size: 14px;
}

.s {
  width: 210px;
  font-size: 14px;
}

.m {
  width: 250px;
  height: 42px;
}

.l {
  width: 300px;
  height: 45px;
}

.dashed {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='18.5' ry='18.5' stroke='%2321A049FF' stroke-width='3' stroke-dasharray='10' stroke-dashoffset='0' /%3e%3c/svg%3e");
  background-color: transparent;
  color: var(--accent-color);

  &:hover {
    background-color: var(--gray-primary);
  }
}

.square {
  height: 34px;
  width: 34px;
  border-radius: 5px;
  background-color: var(--accent-color-super-muted);

  &:hover {
    background-color: var(--accent-color);
  }
}

.completed {
  background-color: var(--accent-color);
}

.current {
  background-color: var(--accent-color);
  border-style: solid;
  border-color: var(--text-color);
}

.disabled {
  opacity: 0.6;
  pointer-events: none;
}

.max {
  width: 100%;
}

@include mobile {
  .Button {
    font-size: var(--font-size-xs);
  }

  .l {
    height: 35px;
  }

  .m {
    width: 170px;
    height: 30px;
  }

  .s {
    width: 160px;
    height: 30px;
  }

  .xs {
    width: 120px;
  }
}
</style>
