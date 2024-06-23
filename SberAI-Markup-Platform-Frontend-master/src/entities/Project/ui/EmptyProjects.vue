<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import ArrowIcon from '@/shared/assets/icons/big-arrow.svg'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
</script>

<template>
  <HStack align="end" class="content">
    <AppText class="text" size="xxl" variant="secondary-muted" weight="600"
      >Доступных проектов нет, но вы можете к ним присоединиться! :)</AppText
    >
    <ArrowIcon class="icon" />
  </HStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.content {
  position: relative;
}

.icon {
  transform: translateX(-110px);
}

.text {
  width: 655px;
}

@include mobile {
  .icon {
    display: none;
  }

  .text {
    width: 100%;
  }
}
</style>
