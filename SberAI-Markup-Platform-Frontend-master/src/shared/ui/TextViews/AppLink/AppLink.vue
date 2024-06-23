<script setup lang="ts">
import type { PropType } from 'vue'
import type { TextSize, TextVariant, TextWeight } from '@/shared/types/textTypes'
import classes from '../TextView.module.scss'
import { mapWeightToClass } from '@/shared/const/textMappers'

defineProps({
  size: {
    type: String as PropType<TextSize>,
    default: 'm'
  },
  weight: {
    type: String as PropType<TextWeight>,
    default: '400'
  },
  variant: {
    type: String as PropType<TextVariant>,
    default: 'primary'
  },
  to: {
    type: String,
    required: true
  }
})
</script>

<template>
  <router-link :to="to" :class="[classes[variant], classes[size], mapWeightToClass[weight]]">
    <slot />
  </router-link>
</template>

<style scoped lang="scss"></style>
