const form = document.querySelector(".form");
const profileName = document.querySelector(".profile__name");
const profileDesc = document.querySelector(".profile__desc");
const profileNameInput = form.querySelector(".form__input_type_name");
const profileDescInput = form.querySelector(".form__input_type_desc");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  toggleModal();
}

form.addEventListener("submit", handleFormSubmit);