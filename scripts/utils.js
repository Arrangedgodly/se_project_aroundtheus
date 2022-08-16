import { closeModal } from "./index.js";

const escapeKeyCode = 27;

export function escapeKeyHandler(evt) {
  if (evt.keyCode === escapeKeyCode) {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

export function closeModalOnRemoteClick(evt) {
  const openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  if (evt.target === openedModal) {
    closeModal(openedModal);
  };
}