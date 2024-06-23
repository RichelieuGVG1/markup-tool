<script setup lang="ts">
import { useUsersListStore } from '../../model/store/usersListStore'
import { UsersList } from '@/entities/User'
import { computed } from 'vue'

const usersListStore = useUsersListStore()

const filteredUsers = computed(() => {
  const regex = new RegExp(usersListStore.searchQuery, 'i')
  return usersListStore.users.filter(
    (user) => regex.test(user.first_name) || regex.test(user.last_name)
  )
})
</script>

<template>
  <UsersList :users="filteredUsers" />
</template>

<style scoped lang="scss"></style>
