import "./index.css";
import { Card } from "../components/Card";
import { FormValidator } from "../components/FormValidator";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { Section } from "../components/Section";
import { Api } from "../components/Api";
import {
  profile,
  editProfileButton,
  editProfilePicButton,
  addCardButton,
  profileImage,
  profileNameInput,
  profileDescInput,
  config,
  selectors,
  promiseInformation,
  deleteInput
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
      handleTrashPopup: (id) => {
        fillDeletePopup(id);
      }
    },
    selectors.cardTemplate,
    profile.id
  );
  return card.generateCard();
};

const changeProfileImage = (img) => {
  profileImage.src = img;
};

const userInfo = new UserInfo(selectors);

const api = new Api(promiseInformation);

function updateUserData() {
  setTimeout(() => {
    api.getUserData().then((res) => {
      userInfo.setUserInfo({
        userName: res.name,
        userJob: res.about,
      });
      changeProfileImage(res.avatar);
      profile.setAttribute("id", res._id);
    });
  }, 1000);
}

updateUserData();

api.getInitialCards().then((cards) => {
  setTimeout(() => {const cardSection = new Section(
    {
      items: cards,
      renderer: (data) => {
        const cardEl = createCard(data);
        cardSection.addItem(cardEl);
      },
    },
    ".cards"
  );

  cardSection.renderItems()}, 1500)
});

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName;
  profileDescInput.value = userJob;
}

function fillDeletePopup(data) {
  deleteInput.value = data;
  deletePopup.open();
}

const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();

const addForm = new PopupWithForm(selectors.cardPopup, (data) => {
  const newCard = { name: data.place, link: data.link };
  api.postNewCard(newCard);
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
  const newUser = { name: data.profile, about: data.desc };
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

const deletePopup = new PopupWithForm(selectors.deletePopup, (data) => {
  api.deleteCard(data.cardId);
  deletePopup.close();
});

deletePopup.setEventListeners();

const profilePicFormValidator = new FormValidator(config, selectors.profilePicForm);
profilePicFormValidator.enableValidation();

const profilePicForm = new PopupWithForm(selectors.profilePicPopup, (data) => {
  api.updateProfilePicture(data.profilepic);
  profilePicForm.close();
});

profilePicForm.setEventListeners();

editProfilePicButton.addEventListener("click", () => {
  profilePicFormValidator.toggleButtonState();
  profilePicForm.open();
});
