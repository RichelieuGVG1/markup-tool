<script setup lang="ts">
import AppInput from '@/shared/ui/AppInput/AppInput.vue'
import { useUsersListStore } from '../../model/store/usersListStore'
const usersListStore = useUsersListStore()
</script>

<template>
  <AppInput
    class="input"
    placeholder="Введите имя пользователя..."
    v-model="usersListStore.searchQuery"
  />
</template>

<style scoped lang="scss">
.input {
  width: 50%;
}
</style>
