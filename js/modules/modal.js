export default class initModal {
  constructor(botaoAbrir, BotaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(BotaoFechar);
    this.containerModal = document.querySelector(containerModal);
    //bind this ao callbCK PARA FAZER REFERENCIA AO OBJETO DA CLASSE
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaMoldal = this.clickForaMoldal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickForaMoldal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaMoldal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
