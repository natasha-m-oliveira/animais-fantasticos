import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(button, list, events) {
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);
    this.activeClass = 'active';

    // define touchstart e click como argumento padrão
    // de eventos caso o usuário não defina
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.list.classList.toggle(this.activeClass);
    this.button.classList.toggle(this.activeClass);
    outsideClick(this.list, this.events, () => {
      this.list.classList.remove(this.activeClass);
      this.button.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((event) => this.button.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.button && this.list) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
