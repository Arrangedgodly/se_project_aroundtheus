import "../pages/index.css";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { openModal, closeModal } from '../utils/utils.js';
import { PopupWithImage, PopupWithForm } from '../components/Popup.js';
import { UserInfo } from "../components/UserInfo.js";
import { 
  initialCards,
  editProfileButton,
  profileModal,
  addCardButton,
  cardModal,
  closeButtons,
  profileName,
  profileDesc,
  profileNameInput,
  profileDescInput,
  cardImageInput,
  cardNameInput,
  popup,
  popupHeader,
  popupImage,
  config
 } from "../utils/constants.js";

function fillProfileForm() {
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;
}

function openProfileModal() {
    fillProfileForm();
    openModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);

function openCardModal() {
    openModal(cardModal);
}

addCardButton.addEventListener("click", openCardModal);

closeButtons.forEach((button) => {
  const activeModal = button.closest('.modal');
  button.addEventListener('click', () => closeModal(activeModal));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  closeModal(profileModal);
}

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

export function handleCardPopup(data) {
  popupImage.src = data.link;
  popupImage.alt = `A full size view of ${data.name}`;
  popupHeader.textContent = data.name;
  openModal(popup);
}

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(config, ".profile-form");
editFormValidator.enableValidation();

function createCard(data) {
  const card = new Card(data, "#card", handleCardPopup );
  const cardElement = card.generateCard();
  return cardElement;
}

const cards = document.querySelector(".cards");

function renderNewCard(card) {
  cards.prepend(card);
}

initialCards.forEach((element) => {
  renderNewCard(createCard(element));
});


const profilePopup = new PopupWithForm('.profile-modal', handleProfileFormSubmit);
profilePopup.setEventListeners();
const cardPopup = new PopupWithForm('.card-modal', handleCardFormSubmit);
cardPopup.setEventListeners();