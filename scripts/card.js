const cardTemplate = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

function createCard(data) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardElementImage = cardElement.querySelector(".card__image");
  let cardElementHeader = cardElement.querySelector(".card__footer-title");
  let cardTitle = data.name;
  let cardLink = data.link;
  cardElementImage.setAttribute("src", cardLink);
  cardElementImage.setAttribute("alt",`Photo of ${cardTitle}`);
  cardElementHeader.textContent = cardTitle;
  return cardElement;
}

function renderCard(card) {
  cards.append(card);
}

initialCards.forEach(element => renderCard(createCard(element)));