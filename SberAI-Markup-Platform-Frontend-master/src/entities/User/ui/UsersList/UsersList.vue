<script setup lang="ts">
import type { User } from '../../model/types/user'
import UserCard from '../UserCard/UserCard.vue'

interface UsersList {
  users: User[]
}
defineProps<UsersList>()
</script>

<template>
  <div class="grid">
    <UserCard v-for="user in users" :key="user.ID" :user="user" />
  </div>
</template>

<style scoped lang="scss">
.grid {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
