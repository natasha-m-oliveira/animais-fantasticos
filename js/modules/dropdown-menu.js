import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(menus, events) {
    this.menus = document.querySelectorAll(menus);
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);

    // define touchstart e click como argumento padrão
    // de eventos caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
  }

  // Ativa o dropdownMenu e adiciona a função que observar o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addDropdownMenusEvent() {
    this.menus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.menus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
