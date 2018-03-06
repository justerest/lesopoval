import { lory } from 'lory.js';

new class HeaderSlider {

  constructor() {
    this.simple_dots = document.querySelector('.js_simple_dots');
    this.dot_count = this.simple_dots.querySelectorAll('.js_slide').length;
    this.dot_container = this.simple_dots.querySelector('.js_dots');
    this.dot_list_item = document.createElement('li');

    this.simple_dots.addEventListener('before.lory.init', this.beforeInit.bind(this));
    this.simple_dots.addEventListener('after.lory.init', this.afterInit.bind(this));
    this.simple_dots.addEventListener('after.lory.slide', this.afterSlide.bind(this));
    this.simple_dots.addEventListener('on.lory.resize', this.onResize.bind(this));

    this.slider = lory(this.simple_dots, {
      enableMouseEvents: true,
      infinite: 1,
    });

    this.timeout = setTimeout(this.slider.next.bind(this.slider), 5000);
  }

  beforeInit() {
    for (let i = 0; i < this.dot_count; i++) {
      this.dot_container.appendChild(this.dot_list_item.cloneNode());
    }
    this.dot_container.childNodes[0].classList.add('active');
  }

  afterInit() {
    for (let i = 0; i < this.dot_count; i++) {
      this.dot_container.childNodes[i].addEventListener('click', e => {
        this.slider.slideTo(Array.prototype.indexOf.call(this.dot_container.childNodes, e.target));
      });
    }
  }

  afterSlide(event) {
    this.dot_container.childNodes.forEach(el => el.classList.remove('active'));
    this.dot_container.childNodes[event.detail.currentSlide - 1].classList.add('active');
    this.autoNext();
  }

  onResize() {
    this.dot_container.childNodes.forEach(el => el.classList.remove('active'));
    this.dot_container.childNodes[0].classList.add('active');
  }

  autoNext() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.slider.next.bind(this.slider), 5000);
  }

};

new class PhotoSlider {

  constructor() {
    this.el = document.querySelector('#photo-slider');
    this.lastSlide = 0;

    this.el.addEventListener('after.lory.slide', event => {
      const { currentSlide } = event.detail;
      if (!currentSlide && this.lastSlide > 2) this.slider.reset();
      this.lastSlide = currentSlide;
    });

    this.slider = lory(this.el, {
      rewind: true,
    });
  }

};

new class ReviewsSlider {

  constructor() {
    this.slider = lory(document.querySelector('#reviews-slider'), {
      enableMouseEvents: true,
      infinite: 1,
    });
  }

};
