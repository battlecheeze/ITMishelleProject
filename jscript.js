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

// Mouse over the btns

var btnWorkArray = document.getElementsByClassName('btn-work');
var btnTeamArray = document.getElementsByClassName('btn-team');

btnWorkArray[0].addEventListener('mouseover', addColorTeam);
btnWorkArray[0].addEventListener('mouseout', removeColorTeam);

function addColorTeam() {
  btnTeamArray[0].classList.add('team-color');
}

function removeColorTeam() {
  btnTeamArray[0].classList.remove('team-color');
}


btnTeamArray[0].addEventListener('mouseover', addColorWork);
btnTeamArray[0].addEventListener('mouseout', removeColorWork);

function addColorWork() {
  btnWorkArray[0].classList.add('work-color');
} 

function removeColorWork() {
  btnWorkArray[0].classList.remove('work-color');
}

/*
btnWorkArray[1].addEventListener('mouseover', addColorTeam);
btnWorkArray[1].addEventListener('mouseout', removeColorTeam);

function addColorTeam() {
  btnTeamArray[1].classList.add('team-color');
}

function removeColorTeam() {
  btnTeamArray[1].classList.remove('team-color');
}


btnTeamArray[1].addEventListener('mouseover', addColorWork);
btnTeamArray[1].addEventListener('mouseout', removeColorWork);

function addColorWork() {
  btnWorkArray[1].classList.add('work-color');
} 

function removeColorWork() {
  btnWorkArray[1].classList.remove('work-color');
}
*/
