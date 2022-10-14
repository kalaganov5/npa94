import Swal from 'sweetalert2';

export class ContactForm7Handler {
  #formSelector = null;
  #form = null;
  /**
   * Creates an instance of ContactForm7Handler.
   * @param {string} formSelector html selector form
   * @memberof ContactForm7Handler
   */
  constructor(formSelector) {
    this.#formSelector = formSelector;
  }

  init = () => {
    if (typeof (wpcf7) === 'object') {
      this.#form = document.querySelector(this.#formSelector);
      this.setHandler();
    } else {
      throw Error ('Contact Form 7 not founded');
    }
  };

  setHandler = function () {
    this.#form.addEventListener('wpcf7mailsent', this.formSubmitSuccess, false);
  };

  formSubmitSuccess = function () {
    Swal.fire({
      title: 'Сообщение успешно отправлено!',
      showCloseButton: true,
      icon: 'success',
      timer: 10000,
      confirmButtonText: 'Отлично',
    });
  };
}
