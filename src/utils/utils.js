export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", escapeKeyHandler);
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", escapeKeyHandler);
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}

const escapeKeyCode = 27;

function escapeKeyHandler(evt) {
  if (evt.keyCode === escapeKeyCode) {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

function closeModalOnRemoteClick(evt) {
  const openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  if (evt.target === openedModal) {
    closeModal(openedModal);
  };
}