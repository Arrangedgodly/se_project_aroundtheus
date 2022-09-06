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

const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");

const addCardButton = document.querySelector(".button_type_add");
const cardModal = document.querySelector(".card-modal");

const profileForm = profileModal.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");
const profileImage = document.querySelector(".profile__image");
const profileNameInput = profileForm.querySelector(".form__input_type_name");
const profileDescInput = profileForm.querySelector(".form__input_type_desc");

const cardForm = cardModal.querySelector(".form");
const cardNameInput = cardForm.querySelector(".form__input_type_name");
const cardImageInput = cardForm.querySelector(".form__input_type_desc");
const cardFormSubmit = cardForm.querySelector(".form__submit");

const popup = document.querySelector(".image-modal");
const popupImage = popup.querySelector(".modal__image");
const popupHeader = popup.querySelector(".modal__header");

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
}

const escapeKeyCode = 27;

const selectors = {
  cardPopup: ".card-modal",
  imagePopup: ".image-modal",
  profilePopup: ".profile-modal",
  cardForm: ".card-form",
  profileForm: ".profile-form",
  cardTemplate: "#card",
  userNameSelector: ".profile__name",
  userJobSelector: ".profile__desc"
}

const promiseInformation = {
  baseUrl: "https://around.nomoreparties.co/v1/group-12/",
  headers: {
    authorization: "fa002eaa-cfdc-49b2-ba7a-7640eb468742",
    "content-type": "application/json"
}
}


export { 
  initialCards,
  editProfileButton,
  profileModal,
  addCardButton,
  cardModal,
  profileForm,
  profileName,
  profileDesc,
  profileImage,
  profileNameInput,
  profileDescInput,
  cardForm,
  cardFormSubmit,
  cardImageInput,
  cardNameInput,
  popup,
  popupHeader,
  popupImage,
  config,
  escapeKeyCode,
  selectors,
  promiseInformation
 };