<template>
  <ComponentSkeleton v-if="isLoading" />
  <VStack v-else class="wrapper" max align="start" gap="4">
    <ComponentName :name="displayName" />
    <div class="wrapper-content">
      <div :class="['expand-block', { opened: isOpened, shadow: isItemsOverflow }]">
        <div ref="wrapper" :class="['variants']">
          <div class="scroll-container">
            <div ref="grid" class="grid">
              <RadioButton
                v-for="([key, value], index) in Object.entries(variants)"
                :class="['answer', 'answer-small', { selected: key === modelValue }]"
                :key="index"
                :value="key"
                :small="true"
                :model-value="modelValue"
                :label="value"
                @update:model-value="handleClick"
              />
            </div>
          </div>
        </div>
        <!--        <AppButton @click="isOpened = !isOpened" color="gray" class="expand-btn">-->
        <!--          <ArrowDown class="arrow" width="23" />-->
        <!--        </AppButton>-->
      </div>
    </div>
  </VStack>
</template>

<script setup lang="ts">
import RadioButton from '@/shared/ui/AppRadiobutton/RadioButton.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import ComponentName from '@/shared/ui/ComponentName/ComponentName.vue'
import { computed, ref } from 'vue'
import ComponentSkeleton from '../../../../shared/ui/Skeletons/ComponentSkeleton.vue'
interface AnswerVariantsProps {
  variants: Record<string, string>
  modelValue?: string
  displayName: string
  isLoading: boolean
}
defineProps<AnswerVariantsProps>()

const emits = defineEmits(['update:modelValue'])
const isOpened = ref(false)
const wrapper = ref<HTMLDivElement | null>(null)
const grid = ref<HTMLDivElement | null>(null)
const isItemsOverflow = computed(() => {
  if (grid.value && wrapper.value) {
    const gridBlockHeight = grid.value.getBoundingClientRect().height
    const wrapperBlockHeight = wrapper.value.getBoundingClientRect().height
    return gridBlockHeight > wrapperBlockHeight
  }
  return false
})

const handleClick = (value: string) => {
  emits('update:modelValue', value)
}
</script>

<style scoped lang="scss">
@import '@/shared/styles/mixins';

.wrapper {
  position: relative;
}

.expand-block {
  position: absolute;
  width: 100%;
  height: 91%;
  transition: height var(--transition-duration);
}

.wrapper-content {
  width: 100%;
  height: 100%;
}

.scroll-container {
  overflow-y: scroll;
  height: 100%;
  padding-right: 10px;

  &::-webkit-scrollbar {
    width: 3px;
    background: var(--gray-secondary);
  }

  &::-webkit-scrollbar-thumb {
    width: 3px;
    background: var(--gray-primary);
    visibility: hidden;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
  }
}

.variants {
  width: 100%;
  padding: 25px 35px;
  background: var(--gray-secondary);
  border-radius: 0 23px 23px 23px;
  height: 100%;
  overflow: hidden;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 18px;
  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }
}

.expand-btn {
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 67px;
  height: 67px;
  border-radius: 50%;
  z-index: 4;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.shadow {
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    border-radius: 23px;
    z-index: 3;
    pointer-events: none;
    background: linear-gradient(0deg, rgb(37 37 37 / 53%) 52.08%, rgba(21, 21, 21, 0) 100%);
  }
}

.answer {
  width: 100%;
  padding: 30px 45px;
  border-radius: 20px;
  cursor: pointer;
  background: var(--gray-primary);
  transition: background var(--transition-duration);

  &.selected {
    background: var(--accent-color);
  }
}

.answer-small {
  padding: 14px 30px;
}

.opened {
  height: 600px;

  .arrow {
    transform: rotate(180deg);
    transition: transform var(--transition-duration);
  }
}

@include mobile {
  .variants {
    padding: 25px 20px;
  }

  .answer {
    padding: 16px 30px;
    border-radius: 15px;
  }

  .variant-skeleton {
    width: 100%;
    height: 52px;
  }

  .opened {
    height: 450px;
  }
}
</style>
