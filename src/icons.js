import { Icons } from './assets';

/**
 * @example
 * ```html
 * <!-- Usage -->
 * <icon id="logo" width="150" height="150"></icon>
 * <!-- Will convert to -->
 * <svg id="logo" width="150" height="150" ...>...</svg>
 * ```
 */
export function initIcons() {
  document.querySelectorAll('icon').forEach(el => {
    const { attributes } = el;
    el.innerHTML = Icons[el.getAttribute('id')];
    Object.keys(attributes).forEach(attrKey => {
      const { name, value } = attributes[attrKey];
      el.firstChild.setAttribute(name, value);
    });
    el.firstChild.classList.add('icon');
    el.outerHTML = el.innerHTML;
  });
} 
