import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Swiper, { Navigation, Pagination} from 'swiper';


const sliderBlog = new Swiper('.pinned-slider__wrap', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.pinned-slider__control--next',
    prevEl: '.pinned-slider__control--prev',
  },
  pagination: {
    el: '.pinned-slider__pagination',
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,
  autoHeight: true,
  wrapperClass: 'pinned-slider__inner',
});

export { sliderBlog };
