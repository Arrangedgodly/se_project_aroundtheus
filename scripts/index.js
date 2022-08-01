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

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscKey);
}

const closeButtons = document.querySelectorAll(".button_type_close");

closeButtons.forEach((button) => {
  const activeModal = button.closest('.modal');
  button.addEventListener('click', () => closeModal(activeModal));
});

const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");

function openProfileModal() {
    profileNameInput.value = profileName.textContent;
    profileDescInput.value = profileDesc.textContent;
    openModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);

const profileForm = profileModal.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");
const profileNameInput = profileForm.querySelector(".form__input_type_name");
const profileDescInput = profileForm.querySelector(".form__input_type_desc");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  closeModal(profileModal);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

const cardTemplate = document.querySelector("#card").content;
const cards = document.querySelector(".cards");

function toggleLike(button) {
  button.classList.toggle("button_type_like_filled");
}

function createCard(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  const cardElementHeader = cardElement.querySelector(".card__footer-title");

  const cardTrashButton = cardElement.querySelector(".button_type_trash");
  function removeCard() {
    cardElement.remove();
  }
  cardTrashButton.addEventListener("click", removeCard);

  const cardLikeButton = cardElement.querySelector(".button_type_like");

  cardLikeButton.addEventListener("click", () => toggleLike(cardLikeButton));

  const cardImageButton = cardElement.querySelector(".button_type_image");
  function openCardImageModal() {
    fillImageModal(data);
    openImageModal();
  }

  cardImageButton.addEventListener("click", openCardImageModal);

  const cardTitle = data.name;
  const cardLink = data.link;
  cardElementImage.setAttribute("src", cardLink);
  cardElementImage.setAttribute("alt", `Photo of ${cardTitle}`);
  cardElementHeader.textContent = cardTitle;
  return cardElement;
}

function renderCard(card) {
  cards.append(card);
}

function renderNewCard(card) {
  cards.prepend(card);
}

initialCards.forEach((element) => renderCard(createCard(element)));

const addCardButton = document.querySelector(".button_type_add");
const cardModal = document.querySelector(".card-modal");

function openCardModal() {
    openModal(cardModal);
}

addCardButton.addEventListener("click", openCardModal);

const cardForm = cardModal.querySelector(".form");
const cardNameInput = cardForm.querySelector(".form__input_type_name");
const cardImageInput = cardForm.querySelector(".form__input_type_desc");
const cardFormSubmit = cardForm.querySelector(".form__submit");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardImageInput.value
  };
  renderNewCard(createCard(newCard));
  evt.target.reset();
  cardFormSubmit.classList.add("form__submit_inactive");
  cardFormSubmit.disabled = true;
  closeModal(cardModal);
}

cardForm.addEventListener("submit", handleCardFormSubmit);

const imageModal = document.querySelector(".image-modal");
const imageModalBackground = imageModal.querySelector(".modal__image");
const imageModalHeader = imageModal.querySelector(".modal__header");

function openImageModal() {
  openModal(imageModal);
}

function fillImageModal(data) {
  imageModalBackground.setAttribute("src", data.link);
  imageModalBackground.setAttribute("alt", `A full size view of ${data.link}`);
  imageModalHeader.textContent = data.name;
  openImageModal();
  return imageModal;
}

const modals = document.querySelectorAll(".modal");

function handleEscKey(evt) {
  if (evt.key === 'Escape') {
    modals.forEach(modal => closeModal(modal));
  }
}

modals.forEach((modal) => {
  modal.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('modal_opened')) {
          closeModal(modal);
      };
      if (evt.target.classList.contains('modal__close')) {
        closeModal(modal);
      };
  });
});