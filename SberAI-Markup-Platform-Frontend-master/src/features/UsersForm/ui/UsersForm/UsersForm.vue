<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import AppInput from '@/shared/ui/AppInput/AppInput.vue'
import { ref } from 'vue'

const users = ref([
  { username: 'Имя Пользователя 1', role: 'Разметчик' },
  { username: 'Имя Пользователя 2', role: 'Разметчик' },
  { username: 'Имя Пользователя 3', role: 'Разметчик' },
  { username: 'Имя Пользователя 4', role: 'Разметчик' },
  { username: 'Имя Пользователя 5', role: 'Разметчик' },
  { username: 'Имя Пользователя 6', role: 'Разметчик' },
  { username: 'Имя Пользователя 7', role: 'Разметчик' },
  { username: 'Имя Пользователя 8', role: 'Разметчик' }
])
</script>

<template>
  <div class="content-area">
    <AppText variant="accent" size="xl" weight="600">Пользователи</AppText>
    <AppInput placeholder="Введите имя пользователя..." class="user-search-input" />
    <div class="user-list"></div>
  </div>
</template>

<style>
.content-area {
  width: 75%;
  margin: 0 auto;
}
.user-search-input {
  margin-top: 50px;
  margin-bottom: 30px;
}
.user-card {
  margin: 8px 10px 8px 10px;
}
</style>
