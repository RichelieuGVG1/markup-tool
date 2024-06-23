<script setup lang="ts">
import FlexWrapper from '../FlexWrapper/FlexWrapper.vue'
import type { PropType } from 'vue'
import type { FlexAlign, FlexGap, FlexJustify } from '@/shared/types/flex'
defineProps({
  justify: {
    type: String as PropType<FlexJustify>,
    default: 'start'
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
  <FlexWrapper direction="column" :align="align" :gap="gap" :max="max" :justify="justify">
    <slot />
  </FlexWrapper>
</template>

<style scoped lang="scss"></style>
