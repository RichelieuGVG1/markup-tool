<script setup lang="ts">
import TasksPaginationBullet from '../TasksPaginationBullet/TasksPaginationBullet.vue'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import ArrowIcon from '@/shared/assets/icons/arrow_down.svg'
import TasksPaginationBulletSkeleton from '../TasksPaginationBullet/TasksPaginationBulletSkeleton.vue'
import { computed, onMounted, ref } from 'vue'
import { getHStack } from '@/shared/lib/helpers/getHStack'

interface TasksPaginationProps {
  tasksIds: number[]
  isLoading: boolean
  currentIndex: number
  noTasksAvailable: boolean
}

const props = defineProps<TasksPaginationProps>()

const emits = defineEmits(['onChangeCurrentTask'])

const isOpen = ref(false)
const currentPage = ref(0)
const gridBlock = ref<HTMLDivElement | null>(null)

const quantityGridBlocks = computed(() => {
  return Math.ceil(props.tasksIds.length / 28)
})

const currentPageIds = computed(() => {
  return (index: number) => props.tasksIds.slice(index * 28, (index + 1) * 28)
})

const gridBlockWidth = computed(() => {
  if (gridBlock.value) {
    return gridBlock.value.getBoundingClientRect().width
  }
  return 420
})

const onClick = (id: number, index: number) => {
  emits('onChangeCurrentTask', { id, index })
}
const goNextPage = () => {
  if (currentPage.value + 1 < quantityGridBlocks.value) currentPage.value++
}

const goPrevPage = () => {
  if (currentPage.value > 0) currentPage.value--
}

onMounted(() => {
  console.log(props.tasksIds)
})
</script>

<template>
  <div class="tasks-pagination-wrapper">
    <HStack align="start" :class="['tasks-pagination', { opened: isOpen }]">
      <button
        :class="['arrow', getHStack({ align: 'center', justify: 'center' })]"
        @click="isOpen = !isOpen"
      >
        <ArrowIcon />
      </button>
      <div ref="gridBlock" class="grid-wrapper">
        <HStack
          align="start"
          class="grid-container"
          :style="{ transform: `translateX(-${currentPage * gridBlockWidth}px)` }"
        >
          <HStack v-for="(n, index) in quantityGridBlocks" :key="n" class="pagination-grid" max>
            <template v-if="isLoading">
              <TasksPaginationBulletSkeleton v-for="n in 3" :key="n" />
            </template>
            <template v-else>
              <TasksPaginationBullet
                v-for="(ID, bulletIndex) in currentPageIds(index)"
                @click="onClick(ID, bulletIndex + 28 * index)"
                :key="bulletIndex"
                :increased="isOpen"
                :id="ID"
                :active="bulletIndex + 28 * index === currentIndex"
                :solved="noTasksAvailable ? true : bulletIndex + 28 * index > 0"
              />
            </template>
          </HStack>
        </HStack>
      </div>
      <button
        @click="goPrevPage"
        :disabled="quantityGridBlocks === 1"
        :class="[
          'arrow-btn',
          getHStack({ justify: 'center' }),
          { disabled: quantityGridBlocks === 1 }
        ]"
      >
        <ArrowIcon />
      </button>
      <button
        @click="goNextPage"
        :disabled="quantityGridBlocks === 1"
        :class="[
          'arrow-btn',
          'reversed',
          getHStack({ justify: 'center' }),
          { disabled: quantityGridBlocks === 1 }
        ]"
      >
        <ArrowIcon />
      </button>
    </HStack>
  </div>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.tasks-pagination-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 3;
  @include mobile {
    width: 100%;
  }
}

.tasks-pagination {
  position: relative;
  padding: 16px 80px;
  width: 596px;
  height: 68px;
  overflow: hidden;
  border-radius: 30px;
  transition: height var(--transition-duration);
  background: var(--gray-secondary);
  box-shadow: 0 10px 26px 2px rgba(0, 0, 0, 0.4);

  @include laptop {
    width: 508px;
    height: 63px;
    padding: 16px 70px;
  }

  @include mobile {
    width: 100%;
    height: 42px;
    padding: 10px 40px;
  }
}

.grid-container {
  transition: transform var(--transition-duration);
}

.arrow-btn {
  position: absolute;
  top: 110px;
  left: 30px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  background: rgba(217, 217, 217, 0.22);

  &.disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  svg {
    transform: rotate(90deg);
    height: 8px;
  }

  @include laptop {
    top: 90px;
  }

  @include mobile {
    width: 22px;
    height: 22px;
    top: 75px;
    left: 8px;
    svg {
      width: 10px;
    }
  }
}

.reversed {
  left: auto;
  right: 18px;

  svg {
    transform: rotate(-90deg);
    height: 8px;
  }
  @include mobile {
    right: 8px;
  }
}

.grid-wrapper {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.arrow {
  position: absolute;
  width: 23px;
  height: 13px;
  cursor: pointer;
  z-index: 10;
  left: 39px;
  top: 28px;
  background: none;
  transition: transform var(--transition-duration);

  @include mobile {
    width: 16px;
    left: auto;
    right: 10px;
    top: 16px;
  }
}

.pagination-grid {
  min-width: 100%;
  max-height: 238px;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  gap: 10px;
  transition: gap var(--transition-duration);
  @include mobile {
    gap: 9px;
  }
}

.opened {
  height: 277px;

  .pagination-grid {
    gap: 14px;
  }
  .grid-wrapper {
    max-height: 238px;
  }
  .arrow {
    transform: rotate(180deg);
  }

  @include laptop {
    height: 222px;

    .pagination-grid {
      gap: 10px;
    }
  }

  @include mobile {
    height: 170px;
  }
}
</style>
