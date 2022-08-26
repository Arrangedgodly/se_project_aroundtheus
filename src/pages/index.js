import "./index.css";
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { openModal, closeModal } from '../utils/utils.js';
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo.js";
import { Section } from "../components/Section";
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


const imagePopup = new PopupWithImage('.image-modal');
imagePopup.setEventListeners();

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(config, ".profile-form");
editFormValidator.enableValidation();

const CardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardEl = new Card(item, "#card", imagePopup.open(item) );
    CardSection.addItem(cardEl.generateCard());
  }
}, ".cards");

CardSection.renderItems();


