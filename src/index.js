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
});

menu.addEventListener('click', () => {
  main.innerHTML = '';
  menuPageLoad();
});

contact.addEventListener('click', () => {
  main.innerHTML = '';
  contactPageLoad();
});
