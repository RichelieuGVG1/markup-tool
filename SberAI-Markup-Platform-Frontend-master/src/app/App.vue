<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import MainLayout from '@/shared/ui/layouts/MainLayout/MainLayout.vue'
import { useUserStore } from '@/entities/User'
import { NavBar } from '@/widgets/NavBar'
import AppLoaderLayout from '@/widgets/AppLoaderLayout'
import { computed, watchEffect } from 'vue'
import { useProjectsListStore } from '@/entities/Project'
import { NotificationList } from '@/entities/Notification'
import { MobileNavigation } from '@/widgets/NavBar'
import { isMobile } from 'mobile-device-detect'
import { TaskMobileNavbar } from '@/pages/TaskPage'
const route = useRoute()
const userStore = useUserStore()
const projectListStore = useProjectsListStore()

const navbar = computed(() => {
  return isMobile && route.meta.customMobileNavbar ? TaskMobileNavbar : NavBar
})

watchEffect(() => {
  if (userStore.userData) {
    projectListStore.fetchProjects()
  }
})
</script>

<template>
  <MainLayout :navbar="navbar" v-if="userStore.mounted">
    <RouterView />
  </MainLayout>
  <div v-else>
    <AppLoaderLayout />
  </div>
  <MobileNavigation v-if="isMobile && !route.meta.customMobileNavbar && !route.meta.customLayout" />
  <NotificationList />
</template>

<style scoped></style>
