const initialCards = [
  {
    name: "Venice",
    link: "https://images.unsplash.com/photo-1654957889404-f16aa636cf49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Gold Coast",
    link: "https://images.unsplash.com/photo-1652734303055-da747a7aedd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
  },
  {
    name: "Los Angeles",
    link: "https://images.unsplash.com/photo-1654543681412-bee75ad60897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: "Ibiza",
    link: "https://images.unsplash.com/photo-1653596010737-1460ad607724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    name: "Tokyo",
    link: "https://images.unsplash.com/photo-1648301184879-28c6ed4964d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    name: "Australia",
    link: "https://images.unsplash.com/photo-1583790773386-5c73e9b37d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
];

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { openModal, closeModal } from './utils.js';

const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;
}

function openProfileModal() {
    fillProfileForm();
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
  const card = new Card(data, "#card", handleCardPopup );
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
  addFormValidator.toggleButtonState();
  closeModal(cardModal);
}

const popup = document.querySelector(".image-modal");
const popupImage = popup.querySelector(".modal__image");
const popupHeader = popup.querySelector(".modal__header");

export function handleCardPopup(data) {
  popupImage.src = data.link;
  popupImage.alt = `A full size view of ${data.name}`;
  popupHeader.textContent = data.name;
  openModal(popup);
}

cardForm.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((element) => {
  renderNewCard(createCard(element));
});

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(config, ".profile-form");
editFormValidator.enableValidation();