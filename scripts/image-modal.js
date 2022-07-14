function createImageModal(data) {
  const imageModalTemplate = document.querySelector("#image-modal").content;
  const imageModalElement = imageModalTemplate.querySelector(".modal").cloneNode(true);
  imageModalElement.classList.add("image-modal");
  imageModalElement.classList.add("modal__opened");
  const imageModalBackground = imageModalElement.querySelector(".modal__image");
  imageModalBackground.setAttribute("src", data.link);
  imageModalBackground.setAttribute("alt", `A full size view of ${data.link}`);
  const imageModalHeader = imageModalElement.querySelector(".modal__header");
  imageModalHeader.textContent = data.name;
  const imageModalCloseButton = imageModalElement.querySelector(".button_type_close");
  function closeImageModal() {
    closeModal(imageModalElement);
  }
  imageModalCloseButton.addEventListener("click", closeImageModal);
  return imageModalElement;
}

function renderImageModal(data) {
  renderModal(createImageModal(data));
}