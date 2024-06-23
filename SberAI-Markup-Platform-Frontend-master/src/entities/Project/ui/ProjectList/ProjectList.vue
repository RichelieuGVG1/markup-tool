<script setup lang="ts">
import type { Project } from '../../model/types/project'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import ProjectCard from '../ProjectCard/ProjectCard.vue'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton.vue'
import EmptyProjects from '../EmptyProjects.vue'
import { ProjectsFilterCategory } from '../../const/projectsListConsts'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'

interface ProjectListProps {
  projects: Project[]
  isLoading: boolean
  category: ProjectsFilterCategory
}

defineProps<ProjectListProps>()
</script>

<template>
  <VStack gap="24" max>
    <template v-if="isLoading">
      <ProjectCardSkeleton v-for="n in 3" :key="n" />
    </template>
    <template v-else>
      <template v-if="projects.length">
        <ProjectCard v-for="project in projects" :key="project.ID" :project="project" />
      </template>
      <EmptyProjects v-else-if="category === ProjectsFilterCategory.ALL" />
      <AppText variant="secondary-muted" weight="600" size="xxl" v-else>
        Проекты в архиве отсутствуют</AppText
      >
    </template>
  </VStack>
</template>
