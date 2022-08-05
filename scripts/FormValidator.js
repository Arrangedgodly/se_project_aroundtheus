class FormValidator {

  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;

    this._form = formElement;
  }

  _checkInputValidity(inputElement) {

  }

  _toggleButtonState(inputEls, submitButton, options) {
    const {inactiveButtonClass} = options;
    let foundInvalid = false;
    inputEls.forEach(input => {
      if (!input.validity.valid) {
        foundInvalid = true;
      }
    });
  
    if (foundInvalid) {
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
    } else {
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
    }
  };

  _hasInvalidInput(inputList) {

  }

  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputEls.forEach(inputEl => {
      inputEl.addEventListener("input", (e) => {
        checkInputValidity(formEl, inputEl, options);
        toggleButtonState(inputEls, submitButton, options);
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

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

const addFormValidator = new FormValidator(config, ".card-form");
addFormValidator.enableValidation();