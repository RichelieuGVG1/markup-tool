<script setup lang="ts">
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import { useTaskStore } from '../../model/store/currentTaskStore'
import TasksPagination from '@/features/TasksPagination'
import type { Project } from '@/entities/Project'
import ComponentsConstructor from '../ComponentsConstructor/ComponentsConstructor.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'

const taskStore = useTaskStore()
interface ProjectTaskMobileProps {
  currentProject: Project
  onChangeCurrentTask: (payload: { id: number; index: number }) => void
}

defineProps<ProjectTaskMobileProps>()
</script>

<template>
  <VStack gap="30" class="task-mobile">
    <VStack align="start" gap="16" class="container">
      <div class="wrapper">
        <TasksPagination
          :no-tasks-available="taskStore.noTasksAvailable"
          :is-loading="taskStore.isLoading"
          :tasks-ids="currentProject.completed_tasks"
          :current-index="taskStore.currentPaginationIndex"
          @on-change-current-task="onChangeCurrentTask"
        />
      </div>
      <AppText size="l" weight="500">{{
        taskStore.currentTask?.question || currentProject.question_title
      }}</AppText>
      <ComponentsConstructor :components="currentProject.components" />
      <HStack gap="16" class="btn_wrapper">
        <AppButton
          size="custom"
          class="continue"
          color="gray"
          v-if="taskStore.noTasksAvailable || !taskStore.isLastTask"
          :disabled="taskStore.isTaskChanged"
          @click="taskStore.saveCurrentTask()"
          :is-loading="taskStore.isLoading"
          >Сохранить</AppButton
        >
        <AppButton
          size="custom"
          class="continue"
          color="gray"
          @click="taskStore.goToPreviousTask(currentProject.ID)"
          >Назад</AppButton
        >
        <AppButton
          size="custom"
          class="continue"
          v-if="taskStore.noTasksAvailable ? !taskStore.isLastTask : true"
          @click="taskStore.goToNextTask(currentProject.ID)"
          :is-loading="taskStore.isLoading"
          >Далее</AppButton
        >
      </HStack>
    </VStack>
  </VStack>
</template>

<style scoped lang="scss">
.task-mobile {
  padding-top: calc(var(--mobile-navbar-task) + 20px);
  padding-bottom: 70px;
}

.wrapper {
  width: 100%;
  height: 42px;
  position: relative;
}

.btn_wrapper {
  margin-top: 50px;
  align-self: end;
}
</style>
