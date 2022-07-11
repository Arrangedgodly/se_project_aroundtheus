const profileForm = profileModal.querySelector(".form");
const profileName = profileModal.querySelector(".profile__name");
const profileDesc = profileModal.querySelector(".profile__desc");
const profileNameInput = profileForm.querySelector(".form__input_type_name");
const profileDescInput = profileForm.querySelector(".form__input_type_desc");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;
  closeModal(profileModal);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);