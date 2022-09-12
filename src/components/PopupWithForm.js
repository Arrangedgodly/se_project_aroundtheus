import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
      super(popupSelector);
      
      this._handleSubmit = handleFormSubmit;
      this._form = this._popup.querySelector(".form");
      this._inputEls = Array.from(this._form.querySelectorAll(".form__input"));
      this._submitBtn = this._form.querySelector(".form__submit");
      this._submitBtnText = this._submitBtn.textContent;
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

    renderLoading(isLoading, loadingText='Saving...') {
      if (isLoading) {
        this._submitBtn.textContent = loadingText;
      } else {
        this._submitBtn.textContent = this._submitBtnText;
      }
    }
  
    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener("submit", (event) => {
        event.preventDefault();

        this.renderLoading(true);

        const inputValues = this._getInputValues();
        this._handleSubmit(inputValues);
      });
    }
  }