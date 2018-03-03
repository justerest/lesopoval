import { Icons } from './assets';

document.querySelectorAll('icon').forEach(toSvg);

/**
 * Convert element to svg image
 * @example
 * ```html
 * <!-- USAGE -->
 * 
 * <icon id="logo" width="150" height="150"></icon>
 * 
 * <!-- RESULT -->
 * 
 * <svg id="logo" width="150" height="150" ...>...</svg>
 * ```
 */
function toSvg(el) {
  const { attributes } = el;
  el.innerHTML = Icons[el.getAttribute('id')];
  Object.keys(attributes).forEach(attrKey => {
    const { name, value } = attributes[attrKey];
    el.firstChild.setAttribute(name, value);
  });
  el.firstChild.classList.add('icon');
  el.outerHTML = el.innerHTML;
}