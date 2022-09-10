const editProfileButton = document.querySelector(".button_type_edit");
const editProfilePicButton = document.querySelector(".button_type_edit-alt");
const profileModal = document.querySelector(".profile-modal");

const addCardButton = document.querySelector(".button_type_add");
const cardModal = document.querySelector(".card-modal");

const profile = document.querySelector(".profile");
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

const deleteModal = document.querySelector(".delete-modal");
const deleteInput = deleteModal.querySelector(".form__input-hidden");

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
  profilePicPopup: ".profile-pic-modal",  
  deletePopup: ".delete-modal",
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
  editProfileButton,
  editProfilePicButton,
  profileModal,
  addCardButton,
  cardModal,
  profile,
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
  promiseInformation,
  deleteInput
 };