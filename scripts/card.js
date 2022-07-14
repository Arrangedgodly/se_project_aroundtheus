const cardTemplate = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

function toggleCardLikeButtonFill(button) {
  button.classList.toggle("button_type_like_filled");
}

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementHeader = cardElement.querySelector(".card__footer-title");

  const cardTrashButton = cardElement.querySelector(".button_type_trash");
  function removeCard() {
    cardElement.remove();
  }
  cardTrashButton.addEventListener("click", removeCard);

  const cardLikeButton = cardElement.querySelector(".button_type_like");
  function changeCardLikeButtonFill() {
    toggleCardLikeButtonFill(cardLikeButton);
  }
  cardLikeButton.addEventListener("click", changeCardLikeButtonFill);

  const cardImageButton = cardElement.querySelector(".button_type_image");
  function generateUniqueCardModal() {
    renderImageModal(data);
  }

  cardImageButton.addEventListener("click", generateUniqueCardModal);

  const cardTitle = data.name;
  const cardLink = data.link;
  cardElementImage.setAttribute("src", cardLink);
  cardElementImage.setAttribute("alt",`Photo of ${cardTitle}`);
  cardElementHeader.textContent = cardTitle;
  return cardElement;
}

function renderCard(card) {
  cards.append(card);
}

function renderNewCard(card) {
  cards.prepend(card);
}

initialCards.forEach(element => renderCard(createCard(element)));