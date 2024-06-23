<script setup lang="ts">
import type { PropType } from 'vue'
import type { TextAlign, TextSize, TextVariant, TextWeight } from '@/shared/types/textTypes'
import { mapWeightToClass } from '@/shared/const/textMappers'
import classes from '../TextView.module.scss'

// interface AppTextProps {
//   size: TextSize
//   weight: TextWeight;
//   align: TextAlign
//   variant: TextVariant
//   remark: string;
// }

defineProps({
  size: {
    type: String as PropType<TextSize>,
    default: 'm'
  },
  weight: {
    type: String as PropType<TextWeight>,
    default: '400'
  },
  align: {
    type: String as PropType<TextAlign>,
    default: 'left'
  },
  variant: {
    type: String as PropType<TextVariant>,
    default: 'primary'
  },
  remark: {
    type: String,
    default: ''
  },
  cutText: {
    type: Boolean
  }
})
</script>

<template>
  <p
    :class="[
      classes[variant],
      classes[align],
      classes[size],
      mapWeightToClass[weight],
      { [classes.cut]: cutText }
    ]"
  >
    <slot />
  </p>
</template>

<style scoped></style>
