import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.min';

new class ModalPhoto {

  constructor() {
    this.pswpElement = document.querySelector('.pswp');
    this.defaultOptions = { shareEl: false };
    this.items = [];

    document.querySelectorAll('.modal-image').forEach((el, i) => {
      this.items[i] = {
        src: el.src,
        w: el.width,
        h: el.height,
      };
      el.parentElement.addEventListener('click', this.show.bind(this, { index: i }));
    });
  }

  show(params = {}) {
    const options = Object.assign({}, this.defaultOptions, params);
    new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, options).init();
  }

};
