<script setup lang="ts">
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import AppInput from '@/shared/ui/AppInput/AppInput.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

import { AuthForm, validationErrorsMapper } from '../../const/const'
import { useAuthFormStore } from '../../model/store/authForm'
import { routes } from '@/shared/const/routes'
import { useRouter } from 'vue-router'
import { isMobile } from 'mobile-device-detect'

interface LoginFormProps {
  formType: AuthForm
}

defineProps<LoginFormProps>()

const emit = defineEmits(['update:formType'])
const router = useRouter()

const authFormStore = useAuthFormStore()
const switchToRegisterForm = () => {
  emit('update:formType', AuthForm.REGISTER)
}
const onLogin = async () => {
  await authFormStore.login()
  await router.push(routes.projects())
}
</script>

<template>
  <VStack max :gap="isMobile ? '20' : '30'">
    <AppText variant="accent" weight="600">Логин</AppText>
    <hr class="line" />
    <AppInput dataTestId="LoginForm.input" v-model="authFormStore.loginForm.email" label="Почта:" />
    <AppInput
      data-test-id="LoginForm.password"
      v-model="authFormStore.loginForm.password"
      type="password"
      label="Пароль:"
    />
    <!--    <VStack v-if="authFormStore.validationErrors.length">-->
    <!--      <AppText v-for="error in authFormStore.validationErrors" :key="error" variant="error">{{-->
    <!--        validationErrorsMapper[error]-->
    <!--      }}</AppText>-->
    <!--    </VStack>-->
    <AppButton
      data-test-id="LoginForm.loginBtn"
      :disabled="authFormStore.isLoading"
      :is-loading="authFormStore.isLoading"
      size="m"
      @click="onLogin"
    >
      Войти
    </AppButton>
    <AppButton color="muted" size="s" @click="switchToRegisterForm">Зарегистрироваться</AppButton>
  </VStack>
</template>

<style scoped lang="scss">
.line {
  width: 100%;
  height: 1px;
  background: var(--hint-color-muted);
  border: none;
}
</style>
