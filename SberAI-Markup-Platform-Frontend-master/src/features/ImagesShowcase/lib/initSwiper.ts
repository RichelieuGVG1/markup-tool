import { register } from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import type { SwiperRef } from '../model/types/swiper'

export function initSwiper(onChangeImage: (index: number) => void) {
  register()
  const swiperEl = document.querySelector('swiper-container') as SwiperRef

  const params = {
    modules: [Navigation]
  }
  if (swiperEl) {
    swiperEl.addEventListener('slidechange', () => {
      onChangeImage(swiperEl.swiper.activeIndex)
    })

    Object.assign(swiperEl, params)

    swiperEl.initialize()
  }
  return swiperEl
}
