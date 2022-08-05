const showInputError = (formEl, inputEl, options) => {
  const { inputErrorClass, errorClass } = options;
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add(errorClass);
};

const hideInputError = (formEl, inputEl, options) => {
  const { inputErrorClass, errorClass } = options;
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageEl.textContent = "";
  errorMessageEl.classList.remove(errorClass);
};

const checkInputValidity = (formEl, inputEl, options) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
};

const toggleButtonState = (inputEls, submitButton, options) => {
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

const setEventListeners = (formEl, options) => {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector('.form__submit');
  inputEls.forEach(inputEl => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
    });
  });
};

const enableValidation = (options) => {
  const { formSelector } = options;
  const formEls = [...document.querySelectorAll(formSelector)];
  formEls.forEach((formEl) => {
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    setEventListeners(formEl, options);
  });
};

const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: 'form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}

enableValidation(config);