<template>
  <HStack max>
    <AppButton
      class="filter-button left"
      :selected="projectsListStore.category === ProjectsFilterCategory.ALL"
      size="custom"
      color="gray"
      @click="projectsListStore.changeCategory(ProjectsFilterCategory.ALL)"
      >Все</AppButton
    >
    <AppButton
      class="filter-button right"
      :selected="projectsListStore.category === ProjectsFilterCategory.ARCHIVE"
      @click="projectsListStore.changeCategory(ProjectsFilterCategory.ARCHIVE)"
      size="custom"
      color="gray"
      >Архив</AppButton
    >
  </HStack>
</template>

<script setup lang="ts">
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { ProjectsFilterCategory, useProjectsListStore } from '@/entities/Project'
const projectsListStore = useProjectsListStore()
</script>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.filter-button {
  padding: 7px 15px;
  &.left {
    border-radius: 5px 0 0 5px;
    margin-right: 2px;
  }
  &.right {
    border-radius: 0 5px 5px 0;
  }

  @include mobile {
    width: 50%;
  }
}
</style>
