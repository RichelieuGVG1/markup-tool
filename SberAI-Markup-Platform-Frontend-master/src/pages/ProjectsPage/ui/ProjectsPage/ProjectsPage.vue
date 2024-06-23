<script setup lang="ts">
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import UsersProjects from '../UsersProjects/UsersProjects.vue'
import ProjectsListHeader from '../ProjectsListHeader/ProjectsListHeader.vue'
import { isMobile } from 'mobile-device-detect'
</script>

<template>
  <VStack class="container" :gap="isMobile ? '20' : '50'">
    <ProjectsListHeader />
    <UsersProjects />
  </VStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.container {
  width: 1000px;
  margin: 0 auto;
  @include mobile {
    width: 100%;
    padding: 0 15px;
  }
}
</style>
