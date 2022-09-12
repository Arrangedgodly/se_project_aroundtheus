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
  profileNameInput,
  profileDescInput,
  config,
  selectors,
  promiseInformation,
  deleteInput,
} from "../utils/constants.js";

const createCard = (cardObject) => {
  const card = new Card(
    {
      data: cardObject,
      handleCardPopup: (imgData) => {
        imagePopup.open(imgData);
      },
      handleCardLike: (id) => {
        api.addCardLike(id).then((res) => card.updateLikes(res));
      },
      handleCardUnlike: (id) => {
        api.removeCardLike(id).then((res) => card.updateLikes(res));
      },
      handleTrashPopup: (id) => {
        fillDeletePopup(id);
      },
    },
    selectors.cardTemplate,
    profile.id
  );
  return card.generateCard();
};

const userInfo = new UserInfo(selectors);

const api = new Api(promiseInformation);

function updateUserData(res) {
  {
    userInfo.setUserInfo({
      userName: res.name,
      userJob: res.about,
    });
    userInfo.setUserImage({ userImage: res.avatar });
    profile.setAttribute("id", res._id);
  }
}

let cards = "";
let cardSection = null;

function setCards(data) {
  cards = data;
}

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cardData, userData]) => {
    updateUserData(userData);
    setCards(cardData);
  })
  .catch((err) => console.log(err));

setTimeout(() => {
  cardSection = new Section(
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
  }, 1000);

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName;
  profileDescInput.value = userJob;
}

const addForm = new PopupWithForm(selectors.cardPopup, (data) => {
  const newCard = { name: data.place, link: data.link };
  api.postNewCard(newCard).then(res => {
    const cardElement = createCard(res);
    cardSection.addNewItem(cardElement);
  });
  addForm.close();
  setTimeout(() => {addForm.renderLoading(false)}, 500);
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
  userInfo.setUserInfo({userName: data.profile, userJob: data.desc})
  profileForm.close();
  setTimeout(() => {profileForm.renderLoading(false)}, 500);
});

profileForm.setEventListeners();

const deletePopup = new PopupWithForm(selectors.deletePopup, (data) => {
  const card = document.getElementById(data.cardId);
  api.deleteCard(data.cardId).then(() => {
    card.remove();
  });
  deletePopup.close();
  setTimeout(() => {deletePopup.renderLoading(false)}, 500);
});

function fillDeletePopup(data) {
  deleteInput.value = data;
  deletePopup.open();
}

deletePopup.setEventListeners();

const imagePopup = new PopupWithImage(selectors.imagePopup);
imagePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  fillProfileForm();
  profileForm.open();
});

const editFormValidator = new FormValidator(config, selectors.profileForm);
editFormValidator.enableValidation();

const profilePicFormValidator = new FormValidator(
  config,
  selectors.profilePicForm
);
profilePicFormValidator.enableValidation();

const profilePicForm = new PopupWithForm(selectors.profilePicPopup, (data) => {
  api.updateProfilePicture(data.profilepic)
    .then(res => userInfo.setUserImage({userImage: res.avatar}));
  profilePicForm.close();
  setTimeout(() => {profilePicForm.renderLoading(false)}, 500);
});

profilePicForm.setEventListeners();

editProfilePicButton.addEventListener("click", () => {
  profilePicFormValidator.toggleButtonState();
  profilePicForm.open();
});