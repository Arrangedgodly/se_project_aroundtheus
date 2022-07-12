function createImageModal(data) {
  const imageModalTemplate = document.querySelector("#image-modal").content;
  const imageModalElement = imageModalTemplate.querySelector(".modal").cloneNode(true);
  imageModalElement.classList.add("image-modal");
  const imageModalBackgroundButton = imageModalElement.querySelector(".button_type_image");
  const imageModalBackground = imageModalElement.querySelector(".modal__image");
  imageModalBackground.setAttribute("src", data.link);
  imageModalBackground.setAttribute("alt", `A full size view of ${data.link}`);
  const imageModalHeader = imageModalElement.querySelector(".modal__header");
  imageModalHeader.textContent = data.name;

  function openImageModal() {
    imageModalElement.classList.add("modal__opened");
  }
  imageModalBackgroundButton.addEventListener("click", openImageModal);

  return imageModalElement;
}