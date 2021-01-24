const burger = document.querySelector('.btn-burger');
const menu = document.querySelector('.menu-title');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});
