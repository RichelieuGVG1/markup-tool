<template>
  <ProjectTaskMobile
    v-if="isMobile"
    :on-change-current-task="onChangeCurrentTask"
    :current-project="currentProject"
  />
  <div v-else class="container">
    <VStack gap="50" align="start">
      <HStack style="position: relative" max justify="between">
        <VStack align="start">
          <AppText size="xl" weight="700">{{ currentProject.title }}</AppText>
          <TaskIndex
            :is-loading="taskStore.isLoading"
            :index="taskStore.currentTask?.index.toString()"
          />
        </VStack>
        <TasksPagination
          :no-tasks-available="taskStore.noTasksAvailable"
          :is-loading="taskStore.isLoading"
          :tasks-ids="currentProject.completed_tasks"
          :current-index="taskStore.currentPaginationIndex"
          @on-change-current-task="onChangeCurrentTask"
        />
      </HStack>
      <AppText size="xl" weight="500">{{
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
  </div>
  <NoAvailableTasksModal :on-close="closeModal" :is-open="isVisible" />
</template>

<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import TaskIndex from '../TaskIndex/TaskIndex.vue'
import { useTaskStore } from '../../model/store/currentTaskStore'
import { useModal } from '@/shared/lib/hooks/useModal'
import { onMounted, onUnmounted, watchEffect } from 'vue'
import { type Project, useProjectsListStore } from '@/entities/Project'
import TasksPagination from '@/features/TasksPagination'
import NoAvailableTasksModal from '../NoAvailableTasksModal/NoAvailableTasksModal.vue'
import { NotificationType, useNotificationStore } from '@/entities/Notification'
import ProjectTaskMobile from '../ProjectTaskMobile/ProjectTaskMobile.vue'
import { isMobile } from 'mobile-device-detect'
import ComponentsConstructor from '../ComponentsConstructor/ComponentsConstructor.vue'
import AppButton from '@/shared/ui/Buttons/AppButton.vue'

interface ProjectTaskProps {
  currentProject: Project
}

const props = defineProps<ProjectTaskProps>()
const taskStore = useTaskStore()
const notificationStore = useNotificationStore()
const { removeUncompletedTask } = useProjectsListStore()
// const { currentTask, solvedTasksIds, answer, cachedTasks, isLoading, isAutoFill } =
//   storeToRefs(taskStore)
// const { fillTextAnswer, fetchCurrentTask, goToNextTask, setAnswer } = taskStore
const [isVisible, { openModal, closeModal }, extra] = useModal()

const onChangeCurrentTask = ({ id, index }: { id: number; index: number }) => {
  if (index !== taskStore.currentPaginationIndex) {
    taskStore.setPaginationIndex(index)
    taskStore.setCurrentTask({
      projectId: props.currentProject.ID,
      taskIndex: id
    })
  }
}

const onArrowDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    if (taskStore.answer) {
      taskStore.goToNextTask(props.currentProject.ID)
    } else {
      notificationStore.addNotification({
        message: 'Заполните ответ',
        notificationType: NotificationType.ERROR
      })
    }
  } else if (event.key === 'ArrowLeft') {
    taskStore.goToPreviousTask(props.currentProject.ID)
  }
}

watchEffect(() => {
  if (taskStore.noTasksAvailable) {
    openModal()
  }
})

onMounted(() => {
  if (props.currentProject) {
    taskStore.setCurrentProject(props.currentProject)
    taskStore.fetchCurrentTask(props.currentProject.ID)
  }
  document.body.addEventListener('keydown', onArrowDown)
})

onUnmounted(() => {
  // taskStore.clearCurrentTask()
  // taskStore.$reset()
  // taskStore.resetAnswer()
  if (taskStore.currentTask) {
    removeUncompletedTask(props.currentProject.ID)
  }
  document.body.removeEventListener('keydown', onArrowDown)
})
</script>

<style scoped>
.continue {
  width: 120px;
  height: 52px;
  padding: 15px 30px;
}

.btn_wrapper {
  align-self: end;
}
</style>
