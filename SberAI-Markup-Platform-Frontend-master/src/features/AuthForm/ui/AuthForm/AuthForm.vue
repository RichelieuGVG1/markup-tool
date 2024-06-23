<script setup lang="ts">
import AppCard from '@/shared/ui/AppCard/AppCard.vue'
import LoginForm from '../LoginForm/LoginForm.vue'
import RegisterForm from '../RegisterForm/RegisterForm.vue'
import { ref } from 'vue'
import { AuthForm } from '../../const/const'
import { isMobile } from 'mobile-device-detect'

const currentScreen = ref(AuthForm.LOGIN)
</script>

<template>
  <AppCard
    border
    :padding-horizontal="isMobile ? '25' : '45'"
    :padding-vertical="isMobile ? '25' : '30'"
    :class="[currentScreen == AuthForm.LOGIN ? 'auth' : 'register']"
  >
    <LoginForm v-model:formType="currentScreen" v-if="currentScreen === AuthForm.LOGIN" />
    <RegisterForm v-model:formType="currentScreen" v-else />
  </AppCard>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.auth {
  width: 450px;
}

.register {
  width: 930px;
}

@include mobile {
  .auth,
  .register {
    width: 100%;
  }
}
</style>
