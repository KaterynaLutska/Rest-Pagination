//  компонент (кнопка) - це не залежний елемент інтерфейсу //
export default class LoadMoreBtn {
  constructor({ selector, hidden }) {
    this.refs = this.getRefs(selector);
    hidden && this.refs.button.classList.add("is-hidden");
  }
  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = document.querySelector(".label");
    refs.spinner = document.querySelector(".spinner");

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = "Показати ще?";
    this.refs.spinner.classList.add("is-hidden");
  }
  disable() {
    this.refs.button.disabled = true; // відключаємо під час запиту //
    this.refs.label.textContent = "Загружаємо...";
    this.refs.spinner.classList.remove("is-hidden");
  }
  show() {
    this.refs.button.classList.remove("is-hidden");
  }
}
