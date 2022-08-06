export class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._popup = document.querySelector(".image-modal");
    this._popupImage = this._popup.querySelector(".modal__image");
    this._popupHeader = this._popup.querySelector(".modal__header");

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".card__footer-title");
    this._cardImage = this._element.querySelector(".card__image");

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = `A Scenic Photo of ${this._title}`;

    this._setEventListeners();

    return this._element;
  }

  _handleLikeIcon() {
    this._element
      .querySelector(".button_type_like")
      .classList.toggle("button_type_like_filled");
  }

  _handleTrashButton() {
    this._element.remove();
  }

  _handleOpenPopup() {
    this._popupImage.src = this._link;
    this._popupImage.alt = `A full size view of ${this._title}`;
    this._popupHeader.textContent = this._title;
    this._popup.classList.add("modal_opened");
  }

  _setEventListeners() {
    this._element
      .querySelector(".button_type_trash")
      .addEventListener("click", () => this._handleTrashButton());

    this._element
      .querySelector(".button_type_image")
      .addEventListener("click", () => this._handleOpenPopup());

    this._element
      .querySelector(".button_type_like")
      .addEventListener("click", () => this._handleLikeIcon());
  }
}
