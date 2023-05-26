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
    this.#form = document.querySelector(this.#formSelector);
    if (this.#form !== null) {
      this.setHandler();
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
