const editProfileButton = document.querySelector(".button_type_edit");
const profileModal = document.querySelector(".profile-modal");
const closeProfileModalButton = profileModal.querySelector(".button_type_close");

function openProfileModal() {
    profileNameInput.value = profileName.textContent;
    profileDescInput.value = profileDesc.textContent;
    openModal(profileModal);
}

function closeProfileModal() {
    closeModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);
closeProfileModalButton.addEventListener("click", closeProfileModal);