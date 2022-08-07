import {Card} from './Card.js';

export function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");

function openProfileModal() {
    profileNameInput.value = profileName.textContent;
    profileDescInput.value = profileDesc.textContent;
    openModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);

const addCardButton = document.querySelector(".button_type_add");
const cardModal = document.querySelector(".card-modal");

function openCardModal() {
    openModal(cardModal);
}

addCardButton.addEventListener("click", openCardModal);

const closeButtons = document.querySelectorAll(".button_type_close");

closeButtons.forEach((button) => {
  const activeModal = button.closest('.modal');
  button.addEventListener('click', () => closeModal(activeModal));
});

const profileForm = profileModal.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");
const profileNameInput = profileForm.querySelector(".form__input_type_name");
const profileDescInput = profileForm.querySelector(".form__input_type_desc");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  closeModal(profileModal);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

function createCard(data) {
  const card = new Card(data, "#card");
  const cardElement = card.generateCard();
  return cardElement;
}

const cards = document.querySelector(".cards");

function renderNewCard(card) {
  cards.prepend(card);
}

const cardForm = cardModal.querySelector(".form");
const cardNameInput = cardForm.querySelector(".form__input_type_name");
const cardImageInput = cardForm.querySelector(".form__input_type_desc");
const cardFormSubmit = cardForm.querySelector(".form__submit");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardImageInput.value
  };
  renderNewCard(createCard(newCard));
  evt.target.reset();
  cardFormSubmit.classList.add("form__submit_inactive");
  cardFormSubmit.disabled = true;
  closeModal(cardModal);
}

export function handleCardPopup(data) {
  const popup = document.querySelector(".image-modal");
  const popupImage = popup.querySelector(".modal__image");
  const popupHeader = popup.querySelector(".modal__header");

  popupImage.src = data.link;
  popupImage.alt = `A full size view of ${data.title}`;
  popupHeader.textContent = data.title;
  openModal(popup);
}

cardForm.addEventListener("submit", handleCardFormSubmit);

const modals = document.querySelectorAll(".modal");

function escapeKeyHandler(evt) {
  if (evt.keyCode === 27) {
    modals.forEach(modal => closeModal(modal));
  }
}

document.addEventListener("keydown", escapeKeyHandler);

document.addEventListener("mouseup", (e) => {
  let openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  else if (e.target === openedModal) {
    closeModal(openedModal);
  };
});