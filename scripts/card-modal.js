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