onScroll(window);
window.addEventListener('scroll', onScroll);

const menuIconEl = document.querySelector('.menu-icon');
menuIconEl.addEventListener('click', () => {
  if (menuIconEl.classList.contains('menu-icon_opened')) {
    menuIconEl.classList.remove('menu-icon_opened');
  }
  else menuIconEl.classList.add('menu-icon_opened');
});

function onScroll(event) {
  const headerEl = document.querySelector('.header');
  if (event.pageY > 150) headerEl.classList.add('header_position_not-top');
  else headerEl.classList.remove('header_position_not-top');
}