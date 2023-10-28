const menu = document.querySelector('.cab-mobile');
const menuClick = document.querySelector('.cab4 p');

document.querySelector('.cab4').addEventListener('click', () => {
  document.querySelector('.cab4 p').style.border = '1px solid white';

  if(menu.classList.contains('none')) {
    menu.classList.remove('none');
    menu.classList.add('flex');
  }else {
    menu.classList.remove('flex');
    menu.classList.add('none');
  }
})

document.addEventListener('click', (e) => {
  if(e.target !== menu && e.target !== menuClick) {
    menu.classList.remove('flex');
    menu.classList.add('none');
  }
})