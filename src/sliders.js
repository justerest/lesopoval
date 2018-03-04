import { lory } from 'lory.js';

new class PhotoSlider {

  constructor() {
    this.el = document.querySelector('#photo-slider');
    this.slider = lory(this.el, {
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

lory(document.querySelector('#reviews-slider'), {
  enableMouseEvents: true,
  infinite: 1,
});
