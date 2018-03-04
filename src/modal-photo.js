import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

new class ModalPhoto {

  constructor() {
    this.pswpElement = document.querySelector('.pswp');
    this.defaultOptions = { shareEl: false, getThumbBoundsFn: this.getThumbBoundsFn.bind(this) };
    this.items = [];
    this.images = document.querySelectorAll('.modal-image');

    this.images.forEach((el, i) => {
      this.items[i] = { src: el.src, w: el.width, h: el.height };
      el.parentElement.addEventListener('click', this.open.bind(this, { index: i }));
    });
  }

  open(params = {}) {
    const options = Object.assign({}, this.defaultOptions, params);
    new PhotoSwipe(this.pswpElement, PhotoSwipeUI_Default, this.items, options).init();
  }

  getThumbBoundsFn(index) {
    const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
    const rect = this.images[index].getBoundingClientRect();

    return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
  }

};
