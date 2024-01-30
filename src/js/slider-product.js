import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const sliderProduct = new Swiper('.sp-slider__slider', {
  modules: [Navigation, Pagination, Autoplay],
  navigation: {
    nextEl: '.sp-slider__control--next',
    prevEl: '.sp-slider__control--prev',
  },
  pagination: {
    el: '.pinned-slider__pagination',
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  // autoHeight: true,
  // wrapperClass: 'sp-slider__wrapper',
});
