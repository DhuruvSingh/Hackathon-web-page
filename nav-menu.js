const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none','!important';
    menuIcon.style.display = 'block','!important';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block','!important';
    menuIcon.style.display = 'none','!important';
  }
}

menu.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);
