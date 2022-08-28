import { escapeKeyCode } from "../utils/constants.js";

export class Popup {
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
    evt.preventDefault();

    if (evt.keyCode === escapeKeyCode) {
      this.close();
    }
  }

  _closeModalOnRemoteClick(evt) {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal === null) {return;}
    if (evt.target === openedModal) {
      this.close();
    };
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => this.close());
    this._popup.addEventListener("mousedown", (evt) => this._closeModalOnRemoteClick(evt));
  }
}