import { lory } from 'lory.js';

new class PhotoSlider {

  constructor() {
    this.el = document.querySelector('.photo__slider');
    this.slider = lory(this.el, {
      enableMouseEvents: true,
      infinite: true,
      rewind: true,
    });
    this.lastSlide = 0;

    this.el.addEventListener('after.lory.slide', event => {
      const { currentSlide } = event.detail;
      if (!currentSlide && this.lastSlide > 2) this.slider.reset();
      this.lastSlide = currentSlide;
    });
  }

};
