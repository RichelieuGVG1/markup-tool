<script setup lang="ts">
import AppTextArea from '@/shared/ui/AppTextArea/AppTextArea.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import ComponentName from '@/shared/ui/ComponentName/ComponentName.vue'
import AutoFillButton from '../AutoFillButton/AutoFillButton.vue'
import { computed, onMounted, ref } from 'vue'
import { useTaskStore } from '../../model/store/currentTaskStore'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import ComponentSkeleton from '../../../../shared/ui/Skeletons/ComponentSkeleton.vue'

interface AnswerTextAreaProps {
  modelValue?: string
  placeholder?: string
  displayName: string
  name: string
  isLoading: boolean
}
const props = defineProps<AnswerTextAreaProps>()
const emit = defineEmits(['update:modelValue', 'openModal'])
const isAutoFill = ref(true)
const currentTaskStore = useTaskStore()

const onChangeAutoFill = (value: boolean) => {
  isAutoFill.value = value
  if (currentTaskStore.currentTask) {
    if (currentTaskStore.answer[props.name] && isAutoFill.value) {
      emit('openModal', props.name)
    } else if (!currentTaskStore.answer[props.name] && isAutoFill.value) {
      currentTaskStore.setAnswer(props.name, currentTaskStore.textComponentPlaceholder(props.name))
    }
  }
}
const updateInput = (value: string) => {
  emit('update:modelValue', value)
}

onMounted(() => {
  currentTaskStore.setAnswer(props.name, currentTaskStore.textComponentValue(props.name) ?? '')
})
</script>

<template>
  <ComponentSkeleton v-if="isLoading" />
  <VStack v-else align="start" gap="4">
    <HStack align="end" gap="10">
      <ComponentName :name="displayName" />
      <AutoFillButton :on-change="onChangeAutoFill" :model-value="isAutoFill" />
    </HStack>
    <AppTextArea
      background-type="filled"
      @update:model-value="updateInput"
      :model-value="modelValue"
      :placeholder="placeholder"
    />
  </VStack>
</template>

<style scoped lang="scss"></style>
