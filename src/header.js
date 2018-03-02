onScroll();
window.addEventListener('scroll', onScroll);
document.querySelector('.menu-icon').addEventListener('click', () => toggleNav());

function onScroll() {
  const headerEl = document.querySelector('.header');
  if (scrollY > 150) {
    headerEl.classList.add('header_position_not-top');
  }
  else {
    headerEl.classList.remove('header_position_not-top');
    toggleNav(true);
  }
}

function toggleNav(isClose = false) {
  const menuIconEl = document.querySelector('.menu-icon');
  const navEl = document.querySelector('.nav');

  if (menuIconEl.classList.contains('menu-icon_opened') || isClose) {
    menuIconEl.classList.remove('menu-icon_opened');
    navEl.classList.remove('nav_opened');
  }
  else {
    menuIconEl.classList.add('menu-icon_opened');
    navEl.classList.add('nav_opened');
  }
}