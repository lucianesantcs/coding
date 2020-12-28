const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  form.classList.add('form-hide');
});

form.addEventListener('animationstart', (event) => {
  if (event.animationName === 'formDown') {
    document.querySelector('body').style.overflow = 'hidden';
  }
});

form.addEventListener('animationend', (event) => {
  if (event.animationName === 'formDown') {
    form.style.display = 'none';
    document.querySelector('body').style.overflow = 'none';
  }
});
