<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initSwiper } from '../../lib/initSwiper'
import type { SwiperRef } from '../../model/types/swiper'
import SwiperPagination from '../SwiperPagination/SwiperPagination.vue'
import { base64Src } from '@/shared/lib/helpers/base64Src'
import AppSkeleton from '@/shared/ui/Skeletons/AppSkeleton.vue'
import { useModal } from '@/shared/lib/hooks/useModal'
import FullScreenImage from '@/shared/ui/Modals/FullScreenImage.vue'

interface ImageSwiperProps {
  images: string[]
  isLoading?: boolean
}
const props = defineProps<ImageSwiperProps>()

const [isVisible, { openModal, closeModal }] = useModal()
const swiperRef = ref<SwiperRef | null>(null)
const currentImageIndex = ref(0)

const onChangeImage = (index: number) => {
  currentImageIndex.value = index
}

onMounted(() => {
  swiperRef.value = initSwiper(onChangeImage)
})
</script>

<template>
  <AppSkeleton class="wrapper" v-if="isLoading" />
  <template v-else>
    <swiper-container v-if="images.length !== 0" class="wrapper">
      <swiper-slide @click="openModal" v-for="(image, index) in images" :key="index">
        <img class="img" :src="base64Src(image)" alt="slider" />
      </swiper-slide>
    </swiper-container>

    <SwiperPagination
      v-if="images.length > 1"
      :image-length="images.length"
      :current-index="currentImageIndex"
    />
    <FullScreenImage
      :open="isVisible"
      :on-close="closeModal"
      :image="base64Src(images[currentImageIndex])"
    />
  </template>
</template>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 217px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
