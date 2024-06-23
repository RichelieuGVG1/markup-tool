<script setup lang="ts">
import { useRoute } from 'vue-router'
import { type Project, useProjectsListStore } from '@/entities/Project'
import { computed, onMounted, onUnmounted, watchEffect } from 'vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import { useTaskStore } from '../../model/store/currentTaskStore'
import AppSkeleton from '@/shared/ui/Skeletons/AppSkeleton.vue'

const { params } = useRoute()
const projectListStore = useProjectsListStore()
const currentTaskStore = useTaskStore()

const projectId = params.id as string
const currentProject = computed<Project | undefined>(() =>
  projectListStore.getProjectById(projectId)
)

// onMounted(() => {
//   console.log(currentProject.value)
// })
onUnmounted(() => {
  currentTaskStore.$reset()
})
</script>

<template>
  <template v-if="projectListStore.isLoading">
    <AppSkeleton />
  </template>
  <template v-else-if="currentProject">
    <router-view :current-project="currentProject" />
  </template>
  <template v-else>
    <AppText align="center" size="xl">Проект не найден</AppText>
  </template>
</template>
