const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");
const closeProfileModalButton = profileModal.querySelector(".button_type_close");

function createProfileModal() {
  const profileModalHeader = profileModal.querySelector(".form__header");
  profileModalHeader.textContent = "Edit profile";
  const profileModalInputName = profileModal.querySelector(".form__input_type_name");
  profileModalInputName.setAttribute("placeholder", "Set Your New Name");
  const profileModalInputDesc = profileModal.querySelector(".form__input_type_desc");
  profileModalInputDesc.setAttribute("placeholder", "Set Your New Job Title");
  return profileModal;
}

function openProfileModal() {
    openModal(profileModal);
}

function closeProfileModal() {
    closeModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);
closeProfileModalButton.addEventListener("click", closeProfileModal);