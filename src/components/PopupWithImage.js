import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".modal__image");
    this._imageCaption = this._popup.querySelector(".modal__header");
  }

    open(data) {
      this._imageElement.src = data.link;
      this._imageElement.alt = `A full size view of ${data.name}`;
      this._imageCaption.textContent = data.name;
      super.open();
    }
  }