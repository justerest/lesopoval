import './app.scss';

import { lory } from 'lory.js';

import { initIcons } from './icons';

initIcons();

document.querySelectorAll('.js_slider').forEach(slider => {
  lory(slider, {
    infinite: 1,
  });
});
