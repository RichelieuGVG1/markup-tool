<template>
  <MainLayout :navbar="NavBarSkeleton">
    <VStack gap="50">
      <AppSkeleton class="appBar" />
      <VStack gap="24">
        <AppSkeleton v-for="n in 5" :key="n" class="projectCard" />
      </VStack>
    </VStack>
  </MainLayout>
</template>

<script setup lang="ts">
// eslint-disable-next-line fsd-architecture-plugin/layer-imports
import { NavBarSkeleton } from '@/widgets/NavBar'
import MainLayout from '@/shared/ui/layouts/MainLayout/MainLayout.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppSkeleton from '@/shared/ui/Skeletons/AppSkeleton.vue'
</script>

<style lang="scss" scoped>
.appBar {
  width: 930px;
  height: 60px;
}

.projectCard {
  width: 930px;
  height: 150px;
}
</style>
