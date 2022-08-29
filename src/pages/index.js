import "./index.css";
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { openModal, closeModal } from '../utils/utils';
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section";
import { 
  initialCards,
  editProfileButton,
  profileModal,
  addCardButton,
  cardModal,
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


const imagePopup = new PopupWithImage('.image-modal');
imagePopup.setEventListeners();

const CardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const handleCardPopup = () => {imagePopup.open(item)};
    const cardEl = new Card(item, "#card", handleCardPopup() );
    CardSection.addItem(cardEl.generateCard());
  }
}, ".cards");

CardSection.renderItems();

const addForm = new PopupWithForm(".card-modal", () => {
  const newCard = { name: cardNameInput.value, link: cardImageInput.value };
  const handleCardPopup = () => {imagePopup.open(newCard);}
  const newCardEl = new Card(newCard, "#card", handleCardPopup());
  CardSection.addNewItem(newCardEl.generateCard());
  addForm.close();
});

addForm.setEventListeners();

addCardButton.addEventListener("click", () => addForm.open());

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();

const profileForm = new PopupWithForm(".profile-modal", () => {
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  profileForm.close();
});

profileForm.setEventListeners();

editProfileButton.addEventListener("click", () => profileForm.open());

const editFormValidator = new FormValidator(config, ".profile-form");
editFormValidator.enableValidation();