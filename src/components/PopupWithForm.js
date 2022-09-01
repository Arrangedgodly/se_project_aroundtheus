import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      
      this._handleSubmit = handleFormSubmit;
      this._form = this._popup.querySelector(".form");
      this._inputEls = Array.from(this._form.querySelectorAll(".form__input"));
    }
  
    _getInputValues() {
      const formValues = {};
      this._inputEls.forEach((input) => {
        formValues[input.name] = input.value;
      });
      return formValues;
    }
  
    close() {
      this._form.reset();
      super.close();
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputValues = this._getInputValues();
        this._handleSubmit(inputValues);
      });
    }
  }