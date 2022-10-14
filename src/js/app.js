import '../scss/app.scss';

/* Your JS Code goes here */
import { Navigation } from './navigation/navigation.js';
import { ContactForm7Handler } from './contact-form7.js';

const navigation = new Navigation();
navigation.init();

const form = new ContactForm7Handler('.wpcf7');
form.init();
