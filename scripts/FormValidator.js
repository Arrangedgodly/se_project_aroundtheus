export class FormValidator {

  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = document.querySelector(formElement);

    this._inputEls = [this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorMessageEl.textContent = inputElement.validationMessage;
    errorMessageEl.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageEl = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageEl.textContent = "";
    errorMessageEl.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      _showInputError(inputElement);
    } else {
      _hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    let foundInvalid = false;
    this._inputEls.forEach(input => {
      if (!input.validity.valid) {
        foundInvalid = true;
      }
    });
  
    if (foundInvalid) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputEls.forEach((element) => {
      element.addEventListener("input", (e) => {
        _checkInputValidity(element);
        _toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}