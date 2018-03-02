import './app.scss';
import { initIcons } from './icons';
import { lory } from 'lory.js';


const slider = document.querySelector('.js_slider');

lory(slider, {
  infinite: 1,
});


initIcons();
