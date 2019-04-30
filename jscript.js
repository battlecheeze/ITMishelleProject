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

// Mouse over the btns using arrays

var btnWorkArray = document.getElementsByClassName('btn-work');
var btnTeamArray = document.getElementsByClassName('btn-team');

var BtnEvent = function(btnWork, btnTeam) {
  this.btnWork = btnWork;
  this.btnWork.addEventListener('mouseover', function() {
    btnTeam.classList.add('team-color');
  });
  this.btnWork.addEventListener('mouseout', function() {
    btnTeam.classList.remove('team-color');
  });
  this.btnTeam = btnTeam;
  this.btnTeam.addEventListener('mouseover', function(){
    btnWork.classList.add('work-color');
  });
  this.btnTeam.addEventListener('mouseout', function() {
    btnWork.classList.remove('work-color');
  });
}

var BtnEvent1 = new BtnEvent(btnWorkArray[0], btnTeamArray[0]); 
var BtnEvent2 = new BtnEvent(btnWorkArray[1], btnTeamArray[1]);
