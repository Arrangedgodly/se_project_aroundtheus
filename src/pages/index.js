import "./index.css";
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section";
import { 
  initialCards,
  editProfileButton,
  addCardButton,
  profileName,
  profileDesc,
  profileNameInput,
  profileDescInput,
  cardImageInput,
  cardNameInput,
  config,
  selectors
 } from "../utils/constants.js";


const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();

const CardSection = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardEl = new Card(
      {
        data,
        handleCardPopup: (imgData) => {
          imagePopup.open(imgData)
        }
      }, 
      selectors.cardTemplate
      );
    CardSection.addItem(cardEl.generateCard());
  }
}, ".cards");

CardSection.renderItems();

const addForm = new PopupWithForm(selectors.cardPopup, () => {
  const newCard = { name: cardNameInput.value, link: cardImageInput.value };
  const newCardEl = new Card(
    {
      data: newCard,
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData)
      }
    }, 
    selectors.cardTemplate
    );
  CardSection.addNewItem(newCardEl.generateCard());
  addForm.close();
});

addForm.setEventListeners();

addCardButton.addEventListener("click", () => addForm.open());

const addFormValidator = new FormValidator(config, selectors.cardForm);
addFormValidator.enableValidation();

const profileForm = new PopupWithForm(selectors.profilePopup, () => {
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  profileForm.close();
});

profileForm.setEventListeners();

editProfileButton.addEventListener("click", () => profileForm.open());

const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();