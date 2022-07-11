function createCardModal() {
  const cardModalTemplate = document.querySelector("#modal").content;
  const cardModalElement = cardModalTemplate.querySelector(".modal").cloneNode(true);
  cardModalElement.classList.add("card-modal");
  const cardModalHeader = cardModalElement.querySelector(".form__header");
  cardModalHeader.textContent = "New Place";
  const cardModalInputName = cardModalElement.querySelector(".form__input_type_name");
  cardModalInputName.setAttribute("placeholder", "Title");
  const cardModalInputDesc = cardModalElement.querySelector(".form__input_type_desc");
  cardModalInputDesc.setAttribute("placeholder", "Image Link");
  return cardModalElement;
}

function renderCardModal() {
  renderModal(createCardModal());
}

renderCardModal();

const addCardButton = document.querySelector(".button_type_add");
const cardModal = document.querySelector(".card-modal");
const closeCardModalButton = cardModal.querySelector(".button_type_close");


function openCardModal() {
    openModal(cardModal);
}

function closeCardModal() {
    closeModal(cardModal);
}

addCardButton.addEventListener("click", openCardModal);
closeCardModalButton.addEventListener("click", closeCardModal);