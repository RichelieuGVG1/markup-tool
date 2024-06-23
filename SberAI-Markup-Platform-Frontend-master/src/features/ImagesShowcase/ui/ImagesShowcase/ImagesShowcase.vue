<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import FullScreenImageSwiper from '../FullScreenImageSwiper/FullScreenImageSwiper.vue'
import ComponentName from '@/shared/ui/ComponentName/ComponentName.vue'
import VStack from '@/shared/ui/Stack/VStack/VStack.vue'
import { base64Src } from '@/shared/lib/helpers/base64Src'
import ComponentSkeleton from '@/shared/ui/Skeletons/ComponentSkeleton.vue'

const props = defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  displayName: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const currentImageIndex = ref(0)
const open = (index: number) => {
  currentImageIndex.value = index
  isOpen.value = true
}

const close = () => {
  isOpen.value = false
}
</script>

<template>
  <ComponentSkeleton v-if="isLoading" />
  <template v-else>
    <VStack align="start" gap="4" v-if="images.length !== 0" class="wrapper">
      <ComponentName :name="displayName" />
      <div class="grid">
        <div class="img-wrapper" v-for="(image, index) in images" :key="index">
          <img @click="open(index)" class="img" :src="base64Src(image)" alt="grid" />
          <img class="img-blur" :src="base64Src(image)" alt="grid" />
        </div>
      </div>
    </VStack>
  </template>

  <FullScreenImageSwiper :images="images" :open="isOpen" :on-close="close" />
</template>

<style scoped lang="scss">
@import '@/shared/styles/mixins';
.wrapper {
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(47%, 1fr));
  padding: 15px;
  background: var(--gray-secondary);
  width: 100%;
  height: 475px;
  border-radius: 0 23px 23px 23px;
  gap: 18px;
  overflow: hidden;
}

.img-wrapper {
  position: relative;
  width: 100%;
}

.img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 3;
  backdrop-filter: blur(30px);
}

.img-blur {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-skeleton {
  width: 850px;
  height: 485px;
}

@include mobile {
  .grid {
    height: 280px;
  }
}
</style>
