import '../scss/app.scss';

/* Your JS Code goes here */
import { Navigation } from './navigation/navigation.js';
import { ContactForm7Handler } from './contact-form7.js';
import { sliderBlog } from './slider-blog.js';
import { sliderProduct } from './slider-product';
import { fixProductHeight } from './fix-product-height';
import {productDownloadModal} from './product-download-modal';

// MicroModal.show('modal-1'); // [1]
const navigation = new Navigation();
navigation.init();

productDownloadModal();

const form = new ContactForm7Handler('.wpcf7');
form.init();

// try swiper
try {
  sliderBlog();
} catch (e) { /* console.log("no swiper") */ }

try {
  sliderProduct();
} catch (e) { /* console.log("no swiper") */ }

fixProductHeight();


