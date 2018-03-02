import { lory } from 'lory.js';

document.querySelectorAll('.js_slider').forEach(slider => {
  lory(slider, {
    infinite: 1,
    enableMouseEvents: true,
  });
});