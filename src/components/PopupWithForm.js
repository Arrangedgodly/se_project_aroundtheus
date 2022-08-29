import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFunction) {
      super(popupSelector);
      
      this._handleFunction = handleFunction;
      this._form = this._popup.querySelector(".form");
    }
  
    _getInputValues() {
      this._formValues = {};
      this._form.forEach((input) => {
        this._formValues[input.name] = input.value;
      });
      return this._formValues;
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