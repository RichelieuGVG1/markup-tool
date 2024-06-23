<script setup lang="ts">
import type { PropType } from 'vue'

export type CardPadding = '0' | '8' | '15' | '25' | '30' | '45'
export type CardBorderRadius = '20' | '40'

defineProps({
  paddingVertical: {
    type: String as PropType<CardPadding>,
    default: '0'
  },
  paddingHorizontal: {
    type: String as PropType<CardPadding>,
    default: '0'
  },
  borderRadius: {
    type: String as PropType<CardBorderRadius>,
    default: '20'
  },
  border: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  }
})

const mapPaddingVerticalToClass: Record<CardPadding, string> = {
  0: 'padding_0-vert',
  8: 'padding_8-vert',
  15: 'padding_15-vert',
  30: 'padding_30-vert',
  25: 'padding_25-vert',
  45: 'padding_45-vert'
}

const mapPaddingHorizontalToClass: Record<CardPadding, string> = {
  0: 'padding_0-horizontal',
  8: 'padding_8-horizontal',
  15: 'padding_15-horizontal',
  25: 'padding_25-horizontal',
  30: 'padding_30-horizontal',
  45: 'padding_45-horizontal'
}

const mapRadiusToClass: Record<CardBorderRadius, string> = {
  20: 'radius_20',
  40: 'radius_40'
}
</script>

<template>
  <div
    :class="[
      'card',
      mapPaddingVerticalToClass[paddingVertical],
      mapPaddingHorizontalToClass[paddingHorizontal],
      mapRadiusToClass[borderRadius],
      { 'with-border': border },
      { selected: selected }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  background: var(--gray-secondary);
  transition: background var(--transition-duration);
}

.with-border {
  border: 3px solid var(--accent-color);
}

.selected {
  background: var(--accent-color);
}

.max {
  width: 100%;
}

.padding_0-vert {
  padding: 0;
}

.padding_8-vert {
  padding-top: 8px;
  padding-bottom: 8px;
}

.padding_15-vert {
  padding-top: 15px;
  padding-bottom: 15px;
}

.padding_25-vert {
  padding-top: 25px;
  padding-bottom: 25px;
}

.padding_30-vert {
  padding-top: 30px;
  padding-bottom: 30px;
}

.padding_45-vert {
  padding-top: 45px;
  padding-bottom: 45px;
}

.padding_0-horizontal {
  padding: 0;
}

.padding_8-horizontal {
  padding-left: 8px;
  padding-right: 8px;
}

.padding_15-horizontal {
  padding-left: 15px;
  padding-right: 15px;
}

.padding_25-horizontal {
  padding-left: 25px;
  padding-right: 25px;
}

.padding_30-horizontal {
  padding-left: 30px;
  padding-right: 30px;
}

.padding_45-horizontal {
  padding-left: 45px;
  padding-right: 45px;
}

.radius_20 {
  border-radius: 20px;
}

.radius_40 {
  border-radius: 40px;
}
</style>
