<script setup lang="ts">
import ArrowIcon from '@/shared/assets/icons/arrow_down.svg'
import { getHStack } from '@/shared/lib/helpers/getHStack'
import { useTaskStore } from '../../model/store/currentTaskStore'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import { taskNumber } from '@/shared/lib/helpers/taskNumber'
const taskStore = useTaskStore()
</script>

<template>
  <nav :class="['mobile-nav', getHStack({ gap: '10', align: 'center' })]">
    <router-link class="arrow" to="/">
      <ArrowIcon />
    </router-link>
    <HStack gap="10">
      <AppText weight="700" size="m">{{ taskStore.currentProject?.title }}</AppText>
      <AppText weight="700" variant="secondary" size="m"
        >#{{ taskNumber(taskStore.currentTask?.index.toString()) }}</AppText
      >
    </HStack>
  </nav>
</template>

<style scoped lang="scss">
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 32px;
  z-index: var(--navbar-z-index);
  height: var(--mobile-navbar-task);
  background: var(--gray-secondary);
}

.arrow {
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
}
</style>
