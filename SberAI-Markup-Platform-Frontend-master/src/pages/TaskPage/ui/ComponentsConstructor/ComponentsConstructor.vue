<script setup lang="ts">
import type { Component } from '@/entities/Component'
import ImagesShowcase from '@/features/ImagesShowcase'
import { useTaskStore } from '../../model/store/currentTaskStore'
import { computed, ref } from 'vue'
import AnswerVariants from '../AnswerComponents/AnswerVariants.vue'
import AnswerTextArea from '../AnswerComponents/AnswerTextArea.vue'
import AnswerUploadImage from '../AnswerComponents/AnswerUploadImage.vue'
import AppSkeleton from '@/shared/ui/Skeletons/AppSkeleton.vue'
import { useModal } from '@/shared/lib/hooks/useModal'
import ApproveAutoFillModal from '../ApproveAutoFillModal/ApproveAutoFillModal.vue'
interface ComponentsConstructorProps {
  components: Record<string, Component>
}

const props = defineProps<ComponentsConstructorProps>()
const taskStore = useTaskStore()
const [isVisible, { closeModal, openModal }] = useModal()
const componentName = ref('')
const sortedComponents = computed(() => {
  return Object.entries(props.components).sort(
    (entry1, entry2) => entry1[1].position - entry2[1].position
  )
})

const onOpenModal = (name: string) => {
  componentName.value = name
  openModal()
}

const onApproveAutoFill = () => {
  if (componentName.value) {
    taskStore.setAnswer(
      componentName.value,
      taskStore.textComponentPlaceholder(componentName.value)
    )
  }
}

// const getCurrentComponent = (component: Component) => {
//   switch (component.type) {
//     case 'input':
//       return AnswerTextArea
//     case 'choice':
//       return AnswerVariants
//     case 'images':
//       return ImagesShowcase
//   }
// }
</script>

<template>
  <div class="wrapper-constructor">
    <div
      v-for="[name, component] in sortedComponents"
      :key="name"
      :class="['block', { 'full-width': component.visuals?.fill }]"
    >
      <template v-if="component.purpose === 'answer'">
        <AnswerTextArea
          v-if="component.type === 'input'"
          :name="name"
          :display-name="component.name"
          v-model="taskStore.answer[name]"
          placeholder="Введите ответ"
          @open-modal="onOpenModal"
          :is-loading="taskStore.isLoading"
        />
        <AnswerVariants
          v-else-if="component.type === 'choice'"
          :display-name="component.name"
          v-model="taskStore.answer[name]"
          :variants="component.options"
          :is-loading="taskStore.isLoading"
        />
        <AnswerUploadImage
          v-else-if="component.type === 'image'"
          :display-name="component.name"
          :name="name"
          :is-loading="taskStore.isLoading"
        />
      </template>
      <template v-else>
        <ImagesShowcase
          :is-loading="taskStore.isLoading"
          :display-name="component.name"
          v-if="component.type === 'images'"
          :images="taskStore?.currentTask?.components[name].images ?? []"
        />
      </template>
    </div>
    <ApproveAutoFillModal
      :on-close="closeModal"
      :is-open="isVisible"
      @on-approve="onApproveAutoFill"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.wrapper-constructor {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  width: 100%;
}

.block {
  flex: 1 0 45%;
  height: 525px;
}

.full-width {
  flex-basis: 100%;
}
@include mobile {
  .block {
    height: 325px;
  }
}
</style>
