var lineMenu = document.querySelector('.line-menu');
var menu = document.querySelector('.menu');
var ulMenu = document.querySelector('.ul-menu')
var menuItems = document.querySelectorAll('.menu-item');

let showMenu = false;

lineMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    lineMenu.classList.add('close');
    menu.classList.add('show');
    ulMenu.classList.add('show');



    showMenu = true;
  } else {
    lineMenu.classList.remove('close');
    menu.classList.remove('show');
    ulMenu.classList.remove('show');

    showMenu = false;
  }
}
