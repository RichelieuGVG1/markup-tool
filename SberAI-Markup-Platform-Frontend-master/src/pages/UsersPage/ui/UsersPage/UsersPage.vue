<script setup lang="ts">
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import UsersListFilter from '../UsersListFilter/UsersListFilter.vue'
import UsersGallery from '../UsersGallery/UsersGallery.vue'
</script>

<template>
  <VStack gap="50" max align="start" class="container">
    <VStack align="start" max gap="50">
      <AppText size="xl" variant="accent" weight="700">Пользователи</AppText>
      <UsersListFilter />
    </VStack>
    <UsersGallery />
  </VStack>
</template>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>
