import { Popup } from "./Popup";
import { popupImage, popupHeader } from "../utils/constants.js";

export class PopupWithImage extends Popup {

    open({name, link}) {
      popupImage.src = link;
      popupImage.alt = `A full size view of ${name}`;
      popupHeader.textContent = name;
      super.open();
    }
  }