import Timer from '@igorkowalczyk/countdown';
// https://github.com/IgorKowalczyk/countdown
export default class CountdownLinkDownload {
  #timer = null;
  #time = 10 * 1000;
  #isEnd = false;

  constructor () {
    this.#timer = new Timer();
  }

  start () {
    if (this.#isEnd) {
      return;
    }

    this.htmlHandler();
    this.listener();
    this.#timer.start(this.#time);
  }

  listener () {
    // запускать function если закончил
    this.#timer.on('done', () => {
      this.#hideWait();
      this.#isEnd = true;
    });
  }

  htmlHandler () {
    const htmlItem = document.querySelector('#timer_countdown');
    // Показываем отсчет в HTML
    if (htmlItem) {
      this.#timer.on('tick', (ms) => htmlItem.innerHTML = Math.ceil(ms / 1000));
    }
  }

  stop () {
    this.#timer.stop();
  }

  #hideWait () {
    const waitHTML = document.querySelector('#timer_block');
    waitHTML.classList.add('hidden');
    this.#linksActivator();
  }

  #linksActivator () {
    const linkList = document.querySelector('#timer_download_links');
    linkList.classList.remove('download-app__links--disabled');
  }
};
