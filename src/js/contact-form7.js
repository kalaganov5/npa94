import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class ContactForm7Handler {
  #formSelector = null;
  #form = null;

  /**
   * Creates an instance of ContactForm7Handler.
   * @param {string} formSelector html selector form
   * @memberof ContactForm7Handler
   */
  constructor (formSelector) {
    this.#formSelector = formSelector;
  }

  init = () => {
    this.#form = document.querySelector(this.#formSelector);
    if (this.#form !== null) {
      this.setHandler();
    }
  };

  setHandler = function () {
    this.#form.addEventListener('wpcf7mailsent', this.formSubmitSuccess, false);
  };

  formSubmitSuccess = function () {
    Notify.success(
      'Сообщение успешно отправлено!',
      {
        timeout: 5000,
      },
    );
  };
}
