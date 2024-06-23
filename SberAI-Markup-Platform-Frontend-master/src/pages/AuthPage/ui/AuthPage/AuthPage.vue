<script setup lang="ts">
import BackgroundLight from '@/shared/ui/BackgroundLight/BackgroundLight.vue'
import Logo from '@/shared/assets/icons/logo.svg'
import { AuthForm } from '@/features/AuthForm'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
</script>

<template>
  <VStack class="auth-page">
    <VStack class="form" gap="30">
      <Logo width="218" height="45" />
      <AuthForm />
    </VStack>
    <BackgroundLight class="light" left="-273px" bottom="-273px" />
    <BackgroundLight class="light" right="-273px" top="-273px" />
  </VStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.auth-page {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
}

.form {
  position: relative;
  z-index: 3;
}

@include mobile {
  .light {
    width: 350px;
    height: 350px;
  }
}
</style>
