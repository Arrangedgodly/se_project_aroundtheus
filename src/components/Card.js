export class Card {
  constructor({data, handleCardPopup, handleCardLike, handleCardUnlike}, cardSelector) {
    this._data = data;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerid = data.owner._id;
    this._isLiked = false;

    this._cardSelector = cardSelector;
    this._handleCardPopup = handleCardPopup;
    this._handleCardLike = handleCardLike;
    this._handleCardUnlike = handleCardUnlike;
  }

  _getTemplate = () => {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  };

  generateCard = () => {
    this._element = this._getTemplate();
    this._element.setAttribute("id", this._id);
    const cardTitle = this._element.querySelector(".card__footer-title");
    const cardImage = this._element.querySelector(".card__image");
    this._cardLikeButton = this._element.querySelector(".button_type_like");
    this._cardLikesCount = this._element.querySelector(".card__footer-likes");
    this._cardTrashButton = this._element.querySelector(".button_type_trash");
    this._cardImageButton = this._element.querySelector(".button_type_image");

    cardTitle.textContent = this._title;
    cardImage.src = this._link;
    cardImage.alt = `A Scenic Photo of ${this._title}`;
    this._updateLikeCount();

    this._setEventListeners();

    return this._element;
  };

  _updateLikeCount = () => {
    this._cardLikesCount.textContent = `${this._likes.length}`;
  }

  _handleLikeIcon = () => {
    this._cardLikeButton.classList.toggle("button_type_like_filled");
    this._isLiked = !this._isLiked;
    if (this._isLiked) {
      this._handleCardLike(this._id);
      this._updateLikeCount();
    } else {
      this._handleCardUnlike(this._id);
      this._updateLikeCount();
    }
  };

  _handleTrashButton = () => {
    this._element.remove();
    this._element = null;
  };

  checkCardOwnerId = (id) => {
    if (id !== this._ownerid) {
      this._cardTrashButton.remove();
      this._cardTrashButton = null;
    } else {
      return;
    }
  }

  _setEventListeners() {
    this._cardTrashButton.addEventListener("click", this._handleTrashButton);

    this._cardImageButton.addEventListener("click", () =>
      this._handleCardPopup({name: this._title, link: this._link})
    );

    this._cardLikeButton.addEventListener("click", this._handleLikeIcon);
  }
}