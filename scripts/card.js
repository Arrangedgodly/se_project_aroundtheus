const cardTemplate = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementHeader = cardElement.querySelector(".card__footer-title");
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

initialCards.forEach(element => renderCard(createCard(element)));