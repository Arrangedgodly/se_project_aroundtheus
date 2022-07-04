const editProfileButton = document.querySelector(".button_type_edit");
const closeProfileModalButton = document.querySelector(".button_type_close");
const profileModal = document.querySelector(".profile-modal");

editProfileButton.addEventListener("click", openModal(profileModal));
closeProfileModalButton.addEventListener("click", closeModal(profileModal));