const menu = document.querySelector('.js-menu');
const toggleBtns = document.querySelectorAll('.js-toggle');
const menuLinks = document.querySelectorAll('.js-menu-link');

toggleBtns.forEach(btn => {
  btn.onclick = () => {
    menu.classList.toggle('menu-open');
  }
});

menuLinks.forEach(link => {
  link.onclick = () => {
    if (menu.classList.contains('menu-open'))
      menu.classList.remove('menu-open');
  }
});