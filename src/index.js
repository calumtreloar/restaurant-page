import { homePageLoad, makeCard } from './home';
import { menuPageLoad } from './menu';
import { contactPageLoad } from './contact';

homePageLoad();

let main = document.querySelector('.main');
let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let card = document.querySelector('.card');
let contact = document.querySelector('.contact');

home.addEventListener('click', () => {
  main.innerHTML = '';
  makeCard();
  home.classList.add('selected');
  menu.classList.remove('selected');
  contact.classList.remove('selected');
});

menu.addEventListener('click', () => {
  main.innerHTML = '';
  menuPageLoad();
  menu.classList.add('selected');
  home.classList.remove('selected');
  contact.classList.remove('selected');
});

contact.addEventListener('click', () => {
  main.innerHTML = '';
  contactPageLoad();
  contact.classList.add('selected');
  home.classList.remove('selected');
  menu.classList.remove('selected');
});
