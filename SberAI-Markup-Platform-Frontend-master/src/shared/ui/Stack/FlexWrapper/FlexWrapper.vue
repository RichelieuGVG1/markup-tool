<script setup lang="ts">
import type { PropType } from 'vue'
import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from '../../../types/flex'
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses
} from '../../../const/flexMappers'
import classes from './FlexWrapper.module.scss'

defineProps({
  direction: {
    type: String as PropType<FlexDirection>,
    default: 'row'
  },
  justify: {
    type: String as PropType<FlexJustify>,
    default: 'justify'
  },
  gap: {
    type: String as PropType<FlexGap>
  },
  max: {
    type: Boolean,
    default: false
  },
  align: {
    type: String as PropType<FlexAlign>,
    default: 'center'
  }
})
</script>

<template>
  <div
    :class="[
      classes.flex,
      directionClasses[direction],
      justifyClasses[justify],
      alignClasses[align],
      gap && gapClasses[gap],
      { [classes.max]: max }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
