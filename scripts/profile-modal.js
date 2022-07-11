function createProfileModal() {
  const profileModalTemplate = document.querySelector("#modal").content;
  const profileModalElement = profileModalTemplate.querySelector(".modal").cloneNode(true);
  profileModalElement.classList.add("profile-modal");
  const profileModalHeader = profileModalElement.querySelector(".form__header");
  profileModalHeader.textContent = "Edit profile";
  const profileModalInputName = profileModalElement.querySelector(".form__input_type_name");
  profileModalInputName.setAttribute("placeholder", "Set Your New Name");
  const profileModalInputDesc = profileModalElement.querySelector(".form__input_type_desc");
  profileModalInputDesc.setAttribute("placeholder", "Set Your New Job Title");
  return profileModalElement;
}

function renderProfileModal() {
  renderModal(createProfileModal());
}

renderProfileModal();

const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");
const closeProfileModalButton = profileModal.querySelector(".button_type_close");


function openProfileModal() {
    openModal(profileModal);
}

function closeProfileModal() {
    closeModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);
closeProfileModalButton.addEventListener("click", closeProfileModal);