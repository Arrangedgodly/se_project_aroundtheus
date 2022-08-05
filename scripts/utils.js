function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

const closeButtons = document.querySelectorAll(".button_type_close");

closeButtons.forEach((button) => {
  const activeModal = button.closest('.modal');
  button.addEventListener('click', () => closeModal(activeModal));
});

const modals = document.querySelectorAll(".modal");

function escapeKeyHandler(evt) {
  if (evt.keyCode === 27) {
    modals.forEach(modal => closeModal(modal));
  }
}

document.addEventListener("keydown", escapeKeyHandler);

document.addEventListener("mouseup", (e) => {
  let openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  else if (e.target === openedModal) {
    closeModal(openedModal);
  };
});