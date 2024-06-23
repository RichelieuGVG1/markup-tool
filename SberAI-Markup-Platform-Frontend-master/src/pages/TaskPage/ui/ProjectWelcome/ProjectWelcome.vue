<template>
  <div class="container">
    <VStack :align="'start'" gap="10">
      <AppText :align="'left'" size="xl" weight="700">{{ currentProject.title }}</AppText>
      <AppText size="l" variant="secondary" weight="400"
        >Код проекта: {{ currentProject.code }}</AppText
      >
    </VStack>
    <hr class="line" />
    <VStack max gap="50" align="start">
      <AppText size="l">{{ currentProject.description }}</AppText>
      <VStack align="end" max gap="30">
        <VStack :align="'start'" max gap="16">
          <AppText size="xl" weight="700">Инструкция</AppText>
          <AppText :align="'left'" size="l">{{
            currentProject.instruction ? currentProject.instruction : 'Инструкция отсутствует'
          }}</AppText>
        </VStack>
        <AppButton
          button-tag="link"
          class="next_btn"
          :to="routes.project_task(currentProject.ID.toString())"
          size="custom"
        >
          Далее
        </AppButton>
      </VStack>
    </VStack>
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import { routes } from '@/shared/const/routes'
import { type Project } from '@/entities/Project'
import { isMobile } from 'mobile-device-detect'

interface ProjectWelcomeProps {
  currentProject: Project
}

const props = defineProps<ProjectWelcomeProps>()
</script>

<style scoped lang="scss">
@import '@/shared/styles/mixins';

.line {
  margin-top: 30px;
  margin-bottom: 30px;

  border: 0;
  height: 3px;
  background: var(--gray-secondary);
}

.next_btn {
  width: 160px;
  height: 60px;
  font-weight: 600;
}
</style>
