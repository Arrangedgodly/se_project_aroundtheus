const modals = document.querySelector(".page__main");

function openModal(modal) {
    modal.classList.add("modal__opened");
}

function closeModal(modal) {
    modal.classList.remove("modal__opened");
}

function renderModal(modal) {
    modals.append(modal);
}