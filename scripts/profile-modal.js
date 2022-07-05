const editProfileButton = document.querySelector(".button_type_edit");
const closeProfileModalButton = document.querySelector(".button_type_close");
const profileModal = document.querySelector(".profile-modal");

function openProfileModal() {
    openModal(profileModal);
}

function closeProfileModal() {
    closeModal(profileModal);
}

editProfileButton.addEventListener("click", openProfileModal);
closeProfileModalButton.addEventListener("click", closeProfileModal);