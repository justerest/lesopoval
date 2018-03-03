import { lory } from 'lory.js';

new class SlidersScripts {

  constructor() {
    this.photoSlider = document.querySelector('.photo__slider');
    this.photoSlider.addEventListener('after.lory.slide', event => {
      const { index, nextSlide } = event.detail;
      console.log(event);
    });

    lory(this.photoSlider, {
      enableMouseEvents: true,
      rewind: true,
    });
  }

};
