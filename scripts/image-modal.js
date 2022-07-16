const imageModal = document.querySelector(".image-modal");

function closeImageModal() {
  closeModal(imageModal);
}

function openImageModal() {
  openModal(imageModal);
}

function fillImageModal(data) {
  const imageModalBackground = imageModal.querySelector(".modal__image");
  imageModalBackground.setAttribute("src", data.link);
  imageModalBackground.setAttribute("alt", `A full size view of ${data.link}`);
  const imageModalHeader = imageModal.querySelector(".modal__header");
  imageModalHeader.textContent = data.name;
  const imageModalCloseButton = imageModal.querySelector(".button_type_close");
  imageModalCloseButton.addEventListener("click", closeImageModal);
  openImageModal();
  return imageModal;
}