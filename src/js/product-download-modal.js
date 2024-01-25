import CountdownLinkDownload from './coutdown-link-download';
import MicroModal from 'micromodal';  // es6 module
const countDown = new CountdownLinkDownload();
export const productDownloadModal = () => {

  MicroModal.init({
    onShow: (modal) => {
      countDown.start();
    },
    onClose: (modal) => {
      countDown.stop();
    },
    openTrigger: 'data-modal-open', // [3]
    closeTrigger: 'data-modal-close',
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true // [10]
  });
}
