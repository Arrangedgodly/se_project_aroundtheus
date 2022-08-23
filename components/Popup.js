const escapeKeyCode = 27;

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".button_type_close");
  }

  open() {
    this._popup.classList.add("modal_opened");
  }

  close() {
    this._popup.classList.remove("modal_opened");
  }

  _handleEscClose(evt) {
    if (evt.keyCode === escapeKeyCode) {
      this.close();
    }
  }

  _closeModalOnRemoteClick(evt) {
    if (evt.target === this._popup) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", () => this._closeModalOnRemoteClick());
  }
}

export class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;

    this._popupImage = this._popup.querySelector(".modal__image");
    this._popupHeader = this._popup.querySelector(".modal__header");
  }

  open() {
    super.open();
    this._popupImage.src = this._link;
    this._popupImage.alt = `A full size view of ${this._name}`;
    this._popupHeader.textContent = this._name;
  }
}

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFunction) {
    super(popupSelector);
    this._handleFunction = handleFunction;
    this._form = this._popup.querySelector(".form");
  }

  _getInputValues() {
    const formValues = {};
    this._form.forEach((input) => {
      formValues.push(input.value);
    });
    return formValues;
  }

  close() {
    super.close();
    this._form.reset;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => this._handleFunction);
  }
}