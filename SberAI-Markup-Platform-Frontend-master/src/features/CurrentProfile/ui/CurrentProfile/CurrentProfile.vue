<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
// eslint-disable-next-line fsd-architecture-plugin/layer-imports
import { useAuthFormStore } from '@/features/AuthForm'
import { useRouter } from 'vue-router'
import { routes } from '@/shared/const/routes'
import { useUserStore } from '@/entities/User'
import FlexWrapper from '@/shared/ui/Stack/FlexWrapper/FlexWrapper.vue'
import { isMobile } from 'mobile-device-detect'

defineProps({
  username: {
    type: String,
    default: 'Имя Пользователя'
  },
  id: {
    type: Number,
    default: 12345678
  },
  rating: {
    type: Number,
    default: 0
  },
  mail: {
    type: String,
    default: ''
  },
  taskCount: {
    type: Number,
    default: 0
  },
  imgCount: {
    type: Number,
    default: 0
  },
  regDate: {
    type: Date,
    default: new Date('January 1, 1970')
  }
})

const authFormStore = useAuthFormStore()
const userStore = useUserStore()
const router = useRouter()

function parseDateToString(date: Date) {
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() - offset * 60 * 1000)
  return date.toDateString()
}

const onLogout = async () => {
  await authFormStore.logout()
  router.push(routes.auth())
}
</script>

<template>
  <FlexWrapper
    :direction="isMobile ? 'column' : 'row'"
    class="container"
    max
    :align="isMobile ? 'center' : 'start'"
    :gap="isMobile ? '30' : '85'"
  >
    <VStack gap="24">
      <img src="@/shared/assets/icons/defaultPfp.png" class="profile-img" alt="" />
      <FlexWrapper gap="24" :direction="isMobile ? 'row' : 'column'">
        <AppButton size="xs" border="dashed">Обновить фото</AppButton>
        <AppButton @click="onLogout" size="xs">Выйти</AppButton>
      </FlexWrapper>
    </VStack>
    <VStack max class="user-information" align="start" gap="16">
      <HStack max justify="between">
        <AppText size="xl" weight="600">{{ userStore.getUserFullName }}</AppText>
        <AppText size="l" variant="secondary">ID: {{ userStore.userData?.ID }}</AppText>
      </HStack>
      <AppText variant="secondary" class="additional-info"
        >{{ userStore.getTextRole }} | Рейтинг: {{ rating }}</AppText
      >
      <hr class="line" />

      <AppText size="l" weight="600" variant="underlined" style="margin-top: 20px"
        >Статистика</AppText
      >
      <AppText>Количество выполненных заданий: {{ userStore.userData?.completed_tasks }}</AppText>
      <AppText
        >Дата регистрации:
        {{ new Date(userStore.userData?.reg_date ?? '').toLocaleDateString() }}</AppText
      >
      <AppText>Почта: {{ userStore.userData?.email }}</AppText>
    </VStack>
  </FlexWrapper>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.main-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.additional-info {
  margin-top: 10px;
}

.user-information {
  flex-grow: 1;
}

.profile-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.line {
  width: 100%;
  height: 5px;
  background: var(--hint-color-muted);
  border: none;
  margin-top: 55px;
  border-radius: 5px;
}

@include mobile {
  .line {
    margin-top: 0;
  }

  .profile-img {
    width: 150px;
    height: 150px;
  }
}
</style>
