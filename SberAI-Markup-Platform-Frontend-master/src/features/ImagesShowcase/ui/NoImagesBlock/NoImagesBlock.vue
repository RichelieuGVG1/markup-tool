<script setup lang="ts">
import BorderIcon from '@/shared/assets/icons/border.svg'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
</script>

<template>
  <VStack align="center" justify="center" class="content">
    <BorderIcon class="border" />
    <AppText variant="gray" weight="500" size="xl">Изображение отсутствует</AppText>
  </VStack>
</template>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  position: relative;
}
.border {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  stroke: var(--gray-thirdly);
}
</style>
