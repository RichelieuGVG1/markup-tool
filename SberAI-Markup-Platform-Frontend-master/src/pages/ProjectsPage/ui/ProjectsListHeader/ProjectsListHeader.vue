<script setup lang="ts">
import ProjectsFilter from '../ProjectsFilter/ProjectsFilter.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { useModal } from '@/shared/lib/hooks/useModal'
import ConnectToProjectModal from '@/features/ConnectToProject'
import { watchEffect } from 'vue'
import { NotificationType, useNotificationStore } from '@/entities/Notification'
import FlexWrapper from '@/shared/ui/Stack/FlexWrapper/FlexWrapper.vue'
import { isMobile } from 'mobile-device-detect'

const [isVisible, { openModal, closeModal }] = useModal()
const notificationStore = useNotificationStore()
</script>

<template>
  <FlexWrapper
    :gap="isMobile ? '20' : undefined"
    :direction="isMobile ? 'column' : 'row'"
    :max="true"
    justify="between"
  >
    <FlexWrapper
      :direction="isMobile ? 'column' : 'row'"
      :max="isMobile"
      :gap="isMobile ? '20' : '50'"
    >
      <AppText size="xl" weight="700" variant="accent"> Проекты </AppText>
      <ProjectsFilter />
    </FlexWrapper>
    <AppButton :max="isMobile" size="l" @click="openModal">Присоединиться к проекту</AppButton>
  </FlexWrapper>
  <ConnectToProjectModal :on-close="closeModal" :is-open="isVisible" />
</template>

<style scoped lang="scss"></style>
