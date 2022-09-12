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
        api.addCardLike(id)
          .then((res) => card.updateLikes(res))
          .catch((err) => console.log(err));
      },
      handleCardUnlike: (id) => {
        api.removeCardLike(id)
          .then((res) => card.updateLikes(res))
          .catch((err) => console.log(err));
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

let cardSection = null;

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cardData, userData]) => {
    updateUserData(userData);
    cardSection = new Section(
      {
        items: cardData,
        renderer: (data) => {
          const cardEl = createCard(data);
          cardSection.addItem(cardEl);
        },
      },
      ".cards"
    );
  
  cardSection.renderItems();
  })
  .catch((err) => console.log(err));

function fillProfileForm() {
  const { userName, userJob } = userInfo.getUserInfo();

  profileNameInput.value = userName;
  profileDescInput.value = userJob;
}

const addForm = new PopupWithForm(selectors.cardPopup, (data) => {
  const newCard = { name: data.place, link: data.link };
  api.postNewCard(newCard)
    .then(res => {
    const cardElement = createCard(res);
    cardSection.addNewItem(cardElement);
  })
    .catch((err) => console.log(err))
    .finally(() => {
      addForm.close();
      addForm.renderLoading(false);
    })
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
  api.submitUserEdit(newUser)
    .then(res => {
      userInfo.setUserInfo({userName: res.name, userJob: res.about});
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profileForm.close();
      profileForm.renderLoading(false);
    })
});

profileForm.setEventListeners();

const deletePopup = new PopupWithForm(selectors.deletePopup, (data) => {
  const card = document.getElementById(data.cardId);
  api.deleteCard(data.cardId).then(() => {
    card.remove();
  }).catch((err) => console.log(err))
    .finally(() => {
      deletePopup.close();
      deletePopup.renderLoading(false);
    })
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
    .then(res => {
      userInfo.setUserImage({userImage: res.avatar})
    })
    .catch((err) => console.log(err))
    .finally(() => {
      profilePicForm.close();
      profilePicForm.renderLoading(false);
    })
});

profilePicForm.setEventListeners();

editProfilePicButton.addEventListener("click", () => {
  profilePicFormValidator.resetValidation();
  profilePicForm.open();
});