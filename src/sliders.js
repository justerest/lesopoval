import { lory } from 'lory.js';

new class HeaderSlider {

  constructor() {
    this.simple_dots = document.querySelector('.js_simple_dots');
    this.dot_count = this.simple_dots.querySelectorAll('.js_slide').length;
    this.dot_container = this.simple_dots.querySelector('.js_dots');
    this.dot_list_item = document.createElement('li');

    this.simple_dots.addEventListener('before.lory.init', this.handleDotEvent.bind(this));
    this.simple_dots.addEventListener('after.lory.init', this.handleDotEvent.bind(this));
    this.simple_dots.addEventListener('after.lory.slide', this.handleDotEvent.bind(this));
    this.simple_dots.addEventListener('on.lory.resize', this.handleDotEvent.bind(this));

    this.slider = lory(this.simple_dots, {
      enableMouseEvents: true,
      infinite: 1,
    });
  }

  handleDotEvent(e) {
    if (e.type === 'before.lory.init') {
      for (let i = 0, len = this.dot_count; i < len; i++) {
        const clone = this.dot_list_item.cloneNode();
        this.dot_container.appendChild(clone);
      }
      this.dot_container.childNodes[0].classList.add('active');
    }
    if (e.type === 'after.lory.init') {
      for (let i = 0, len = this.dot_count; i < len; i++) {
        this.dot_container.childNodes[i].addEventListener('click', e => {
          this.slider.slideTo(Array.prototype.indexOf.call(this.dot_container.childNodes, e.target));
        });
      }
    }
    if (e.type === 'after.lory.slide') {
      for (let i = 0, len = this.dot_container.childNodes.length; i < len; i++) {
        this.dot_container.childNodes[i].classList.remove('active');
      }
      this.dot_container.childNodes[e.detail.currentSlide - 1].classList.add('active');
    }
    if (e.type === 'on.lory.resize') {
      for (let i = 0, len = this.dot_container.childNodes.length; i < len; i++) {
        this.dot_container.childNodes[i].classList.remove('active');
      }
      this.dot_container.childNodes[0].classList.add('active');
    }
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
