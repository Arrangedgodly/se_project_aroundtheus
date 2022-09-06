import "./index.css";
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section";
import { Api } from "../components/Api";
import {
  editProfileButton,
  addCardButton,
  profileImage,
  profileNameInput,
  profileDescInput,
  config,
  selectors,
  promiseInformation,
} from "../utils/constants.js";

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData);
      },
      handleCardLike: (id) => {
        api.addCardLike(id);
      },
      handleCardUnlike: (id) => {
        api.removeCardLike(id);
      },
    },
    selectors.cardTemplate
  );
  return card.generateCard();
};

const changeProfileImage = (img) => {
  profileImage.src = img;
}

const userInfo = new UserInfo(selectors);

const api = new Api(promiseInformation);

function updateUserData() {
  setTimeout(() => {
    api.getUserData().then(res => {
      userInfo.setUserInfo({
        userName: res.name,
        userJob: res.about,
      });
      changeProfileImage(res.avatar);
    });
  }, 1000)
}

updateUserData();

api.getInitialCards().then((cards) => {
  const cardSection = new Section(
    {
      items: cards,
      renderer: (data) => {
        const cardEl = createCard(data);
        cardSection.addItem(cardEl);
      },
    },
    ".cards"
  );

  cardSection.renderItems();
});

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName;
  profileDescInput.value = userJob;
}

const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();

const addForm = new PopupWithForm(selectors.cardPopup, (data) => {
  const newCard = { name: data.place, link: data.link };
  setTimeout(() => {api.postNewCard(newCard)}, 1000);
  addForm.close();
});

addForm.setEventListeners();

addCardButton.addEventListener("click", () => {
  addFormValidator.toggleButtonState();
  addForm.open();
});

const addFormValidator = new FormValidator(config, selectors.cardForm);
addFormValidator.enableValidation();

const profileForm = new PopupWithForm(selectors.profilePopup, (data) => {
  const newUser = {name: data.profile, about: data.desc};
  api.submitUserEdit(newUser);
  updateUserData();
  profileForm.close();
});

profileForm.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  profileForm.open();
});

const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();
