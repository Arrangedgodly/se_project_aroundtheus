let cardTemplate = document.querySelector("#card").content;
let cards = document.querySelector(".cards");

function getCardElement(data) {
  let cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardElementImage = cardElement.querySelector(".card__image");
  let cardElementHeader = cardElement.querySelector(".card__footer-title");
  let cardTitle = data.name;
  let cardLink = data.link;
  cardElementImage.setAttribute("src", cardLink);
  cardElementImage.setAttribute("alt", cardTitle);
  cardElementHeader.textContent = cardTitle;
  cards.append(cardElement);
}

for (let i = 0; i < initialCards.length; i++) {
  getCardElement(initialCards[i]);
};