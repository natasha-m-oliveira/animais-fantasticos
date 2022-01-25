export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this ao callback para fazer referência
    // ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // adiciona o evento de toogle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha modal ao clicar do lado de fora
  clickOutsideModal(event) {
    // O this retorna exatamente o elemento que estamos selecionando
    // event.target onde foi clicado
    if (event.target === this.modalContainer) this.toggleModal();
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
