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

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const cards = document.querySelector(".cards");

initialCards.forEach((element) => {
  const card = new Card(element, "#card");
  const cardElement = card.generateCard();
  cards.append(cardElement);
});

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();
const editFormValidator = new FormValidator(config, ".profile-form");
editFormValidator.enableValidation();