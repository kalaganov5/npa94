import '../scss/app.scss';

/* Your JS Code goes here */
import { Navigation } from './navigation/navigation.js';
import { ContactForm7Handler } from './contact-form7.js';
import { sliderBlog } from './slider-blog.js';

const navigation = new Navigation();
navigation.init();

const form = new ContactForm7Handler('.wpcf7');
form.init();

// try swiper
try {
  sliderBlog();
}
catch (e) { /* console.log("no swiper") */ }
