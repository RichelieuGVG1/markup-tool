<script setup lang="ts">
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import AppInput from '@/shared/ui/AppInput/AppInput.vue'
import { ref } from 'vue'

import { AuthForm } from '../../const/const'
import { useAuthFormStore } from '../../model/store/authForm'
import { useRouter } from 'vue-router'
import { routes } from '@/shared/const/routes'
import { isMobile } from 'mobile-device-detect'
import FlexWrapper from '@/shared/ui/Stack/FlexWrapper/FlexWrapper.vue'

interface RegisterFormProps {
  formType: AuthForm
}

defineProps<RegisterFormProps>()

const isRootActive = ref(false)

const authFormStore = useAuthFormStore()

function switchProfiles() {
  isRootActive.value = !isRootActive.value
}

const emit = defineEmits(['update:formType'])
const router = useRouter()

const switchToLoginForm = () => {
  emit('update:formType', AuthForm.LOGIN)
}

const repeatedPass = ref('')

const onRegister = async () => {
  if (repeatedPass.value === authFormStore.registerForm.password) {
    await authFormStore.register()
    await router.push(routes.projects())
  }
}
</script>

<template>
  <VStack max :gap="isMobile ? '20' : '30'">
    <HStack justify="center" max>
      <AppText variant="accent" weight="600">Регистрация</AppText>
    </HStack>
    <hr class="line" />
    <FlexWrapper
      :direction="isMobile ? 'column' : 'row'"
      align="start"
      justify="between"
      :gap="isMobile ? '16' : '50'"
      max
    >
      <VStack max :gap="isMobile ? '16' : '30'">
        <AppInput v-model="authFormStore.registerForm.last_name" label="Фамилия:" />
        <AppInput v-model="authFormStore.registerForm.first_name" label="Имя:" />
      </VStack>
      <div class="vertical-line"></div>
      <VStack max :gap="isMobile ? '16' : '30'">
        <AppInput v-model="authFormStore.registerForm.email" label="Почта:" />
        <AppInput v-model="authFormStore.registerForm.password" type="password" label="Пароль:" />
        <AppInput v-model="repeatedPass" type="password" label="Повторите пароль:" />
      </VStack>
    </FlexWrapper>
    <!--    <VStack v-if="authFormStore.validationErrors.length">-->
    <!--      <AppText v-for="error in authFormStore.validationErrors" :key="error" variant="error">{{-->
    <!--        validationErrorsMapper[error]-->
    <!--      }}</AppText>-->
    <!--    </VStack>-->
    <AppButton
      :disabled="authFormStore.isLoading"
      :is-loading="authFormStore.isLoading"
      @click="onRegister"
    >
      Зарегистрироваться
    </AppButton>
    <AppButton size="s" color="muted" @click="switchToLoginForm">Назад</AppButton>
  </VStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.line {
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--hint-color-muted);
  border: none;
}

.container {
  display: flex;
  width: 100%;
}

.vertical-line {
  width: 2px;
  border-radius: 2px;
  background-color: var(--hint-color-muted);
  height: 275px;
  &.small {
    height: 32px;
  }
}
@include mobile {
  .vertical-line {
    display: none;
  }
}
</style>
