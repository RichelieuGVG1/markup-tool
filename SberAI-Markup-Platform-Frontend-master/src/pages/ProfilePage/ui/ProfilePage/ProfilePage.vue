<script setup lang="ts">
import { CurrentProfile } from '@/features/CurrentProfile'
</script>

<template>
  <Suspense>
    <template #default>
      <CurrentProfile />
    </template>
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style></style>
