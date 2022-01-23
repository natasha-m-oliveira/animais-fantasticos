export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');
  }

  if (menuButton) {
    menuButton.addEventListener('click', openMenu);
  }
}
