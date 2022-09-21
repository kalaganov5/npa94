export class Navigation {
  #menuContainerClass = 'navigation';
  #menuButtonClass = 'hamburger__button';
  #menuButton = document.querySelector(`.${this.#menuButtonClass}`);
  #menuContainer = document.querySelector(`.${this.#menuContainerClass}`);

  init = () => {
    this.#setHandler();
  };

  #setHandler = () => {
    this.#menuButton.addEventListener('click', this.#toggleNavigation);
  };

  #toggleNavigation = () => {
    this.#menuButton.classList.toggle(`${this.#menuButtonClass}--show`);
    this.#menuContainer.classList.toggle(`${this.#menuContainerClass}--show`);
  };
}
