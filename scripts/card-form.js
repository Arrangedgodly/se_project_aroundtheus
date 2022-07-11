const cardForm = cardModal.querySelector(".form");
const cardNameInput = cardForm.querySelector(".form__input_type_name");
const cardImageInput = cardForm.querySelector(".form__input_type_desc");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: cardNameInput.value,
    link: cardImageInput.value
  };
  renderNewCard(createCard(newCard));
  closeModal(cardModal);
}

cardForm.addEventListener("submit", handleCardFormSubmit);