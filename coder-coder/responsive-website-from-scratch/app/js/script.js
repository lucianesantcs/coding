const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
