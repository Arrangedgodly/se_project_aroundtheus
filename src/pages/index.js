import "./index.css";
import { Card } from '../components/Card';
import { FormValidator } from '../components/FormValidator';
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section";
import { Api } from "../components/Api";
import { 
  editProfileButton,
  addCardButton,
  profileNameInput,
  profileDescInput,
  config,
  selectors,
  promiseInformation
 } from "../utils/constants.js";

const api = new Api(promiseInformation);
const initialCardsPromise = api.getInitialCards();
const initialCards = initialCardsPromise.then(res => Array.from(res));
console.log(initialCardsPromise);
console.log(initialCards);

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData)
      }
    },
    selectors.cardTemplate
  );
  return card.generateCard();
}

function fillProfileForm() {
  const { userName,  userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName; 
  profileDescInput.value = userJob; 
}

const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();

const cardSection = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardEl = createCard(data);
    cardSection.addItem(cardEl);
  }
}, ".cards");

cardSection.renderItems();

const addForm = new PopupWithForm(selectors.cardPopup, (data) => {
  const newCard = { name: data.place, link: data.link };
  const newCardEl = createCard(newCard);
  cardSection.addNewItem(newCardEl);
  addForm.close();
});

addForm.setEventListeners();

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addForm.open();
});

const addFormValidator = new FormValidator(config, selectors.cardForm);
addFormValidator.enableValidation();

const userInfo = new UserInfo(selectors);

const profileForm = new PopupWithForm(selectors.profilePopup, (data) => {
  userInfo.setUserInfo({
    userName: data.profile,
    userJob: data.desc
  });
  profileForm.close();
});

profileForm.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  profileForm.open();
});

const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();