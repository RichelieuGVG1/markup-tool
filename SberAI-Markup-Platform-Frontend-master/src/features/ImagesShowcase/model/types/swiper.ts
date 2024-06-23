import { Swiper } from 'swiper/types'

export type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void }
