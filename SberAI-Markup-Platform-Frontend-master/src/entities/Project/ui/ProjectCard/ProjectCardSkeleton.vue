<script setup lang="ts">
import AppSkeleton from '@/shared/ui/Skeletons/AppSkeleton.vue'
import classes from './ProjectCard.module.scss'
</script>

<template>
  <AppSkeleton border-radius="20px" :class="classes.task" />
</template>
