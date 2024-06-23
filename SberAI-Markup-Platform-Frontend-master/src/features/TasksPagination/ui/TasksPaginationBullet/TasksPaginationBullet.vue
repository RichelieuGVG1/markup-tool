<script setup lang="ts">
import AppText from '@/shared/ui/TextViews/AppText/AppText.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'

interface TasksPaginationBullet {
  id: number
  active: boolean
  solved: boolean
  increased: boolean
}
defineProps<TasksPaginationBullet>()
</script>

<template>
  <VStack
    align="center"
    justify="center"
    :class="['bullet', { active }, { solved }, { increased }]"
  >
    <AppText
      class="text"
      align="center"
      :variant="solved ? 'primary' : 'secondary'"
      :cut-text="!increased"
      >{{ id }}</AppText
    >
  </VStack>
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.text {
  width: 100%;
}

.bullet {
  width: 35px;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background: var(--accent-color-super-muted);
  transition: width var(--transition-duration), height var(--transition-duration),
    padding var(--transition-duration);

  @include laptop {
    width: 31px;
    height: 31px;
  }

  @include mobile {
    width: 22px;
    height: 22px;
    padding: 0;
  }
}

.active {
  border: 1px solid var(--text-color);
}

.solved {
  background: var(--accent-color);
}

.increased {
  width: 47px;
  height: 49px;

  @include laptop {
    width: 39px;
    height: 40px;
  }

  @include mobile {
    width: 30px;
    height: 30px;
  }
}
</style>
