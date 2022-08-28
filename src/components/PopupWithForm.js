import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFunction) {
      super(popupSelector);
      
      this._handleFunction = handleFunction;
      this._form = this._popup.querySelector(".form");
    }
  
    _getInputValues() {
      const formValues = {};
      this._form.forEach((input) => {
        formValues.push(input.value);
      });
      return formValues;
    }
  
    close() {
      this._form.reset;
      super.close();
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", () => this._handleFunction);
    }
  }