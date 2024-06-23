<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { SwiperRef } from '../../model/types/swiper'
import { initSwiper } from '../../lib/initSwiper'
import ArrowRight from '@/shared/assets/icons/arrow_right.svg'
import ArrowLeft from '@/shared/assets/icons/arrow_left.svg'
import testImage from '@/shared/assets/testSlider.png'
import ModalWrapper from '@/shared/ui/Modals/ModalWrapper.vue'
import './ImageSwiper.css'
import HStack from '@/shared/ui/Stack/HStack/HStack.vue'
import { base64Src } from '@/shared/lib/helpers/base64Src'

interface FullScreenImageSwiperProps {
  open?: boolean
  onClose?: () => void
  images: string[]
}

const props = defineProps<FullScreenImageSwiperProps>()

const swiperRef = ref<SwiperRef | null>(null)
const currentImageIndex = ref(0)

const onChangeImage = (index: number) => {
  currentImageIndex.value = index
}

const nextSlide = () => {
  swiperRef.value?.swiper.slideNext()
}

const prevSlide = () => {
  swiperRef.value?.swiper.slidePrev()
}

// const base64Image = computed(() => {
//   return (code?: string) => (code ? `data:image/jpeg;base64,${code}` : testImage)
// })
const isNavigationAvailable = computed(() => {
  return props.images && props.images?.length > 1
})

onMounted(() => {
  swiperRef.value = initSwiper(onChangeImage)
})
</script>

<template>
  <ModalWrapper :on-close="onClose" :open="open">
    <div class="swiper-container">
      <swiper-container
        :navigation-next-el="isNavigationAvailable ? '#my-next-button' : false"
        :navigation-prev-el="isNavigationAvailable ? '#my-prev-button' : false"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img class="img" :src="base64Src(image)" alt="slider" />
        </swiper-slide>
      </swiper-container>
      <template v-if="isNavigationAvailable">
        <button @click="nextSlide" id="my-next-button">
          <ArrowRight width="22" class="arrow" />
        </button>
        <button @click="prevSlide" id="my-prev-button">
          <ArrowLeft class="arrow" width="22" />
        </button>
      </template>
      <HStack v-if="isNavigationAvailable" gap="10" justify="center" class="pagination">
        <span
          v-for="(n, index) in images.length"
          :key="index"
          :class="['bullet', { 'bullet-active': index === currentImageIndex }]"
        ></span>
      </HStack>
    </div>
  </ModalWrapper>
</template>

<style scoped lang="scss">
.swiper-container {
  position: relative;
  width: 60%;
}

.pagination {
  margin-top: 20px;
}

.bullet {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--gray-secondary);
}

.bullet-active {
  background: var(--accent-color);
}

.img {
  width: 100%;
  max-height: 750px;
  object-fit: contain;
}

#my-next-button,
#my-prev-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  height: 85px;
  background: rgba(37, 37, 37, 0.7);
  border-radius: 23px;
  z-index: 10;
  cursor: pointer;
  transition: var(--transition-opacity);
  &:hover {
    opacity: 0.8;
  }
}
#my-prev-button {
  left: 0;
}

#my-next-button {
  right: 0;
}
</style>
