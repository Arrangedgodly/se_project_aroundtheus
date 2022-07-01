const editButton = document.querySelector(".button_type_edit");
const closeButton = document.querySelector(".button_type_close");
const modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("modal__opened");
}

editButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

