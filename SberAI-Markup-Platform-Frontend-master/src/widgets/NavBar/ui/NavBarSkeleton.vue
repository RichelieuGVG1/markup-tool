<template>
  <content-loader
    class="navbar"
    viewBox="0 0 1500 100"
    :speed="2"
    primaryColor="#151C1F"
    secondaryColor="#090F11"
  >
    <rect x="0" y="0" rx="0" ry="0" width="100%" height="100" />
  </content-loader>
</template>

<script setup lang="ts">
import { ContentLoader } from 'vue-content-loader'
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
