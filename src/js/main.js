import { createErrorAlert } from './errorsAlerts.js';
import {
  nameValidatorFunc,
  lastNameValidatorFunc,
  emailValidatorFunc,
  numberValidatorFunc,
  passwordValidatorFunc,
  telValidatorFunc,
  urlValidatorFunc,
} from './validatorsFunctions.js';

const nameInput = document.getElementById('name_input');
const lastNameInput = document.getElementById('last_name_input');
const emailInput = document.getElementById('email_input');
const passwordInput = document.getElementById('password_input');
const passwordConfirmationInput = document.getElementById(
  'password_confirmation_input'
);
const ageInput = document.getElementById('age_input');
const urlInput = document.getElementById('url_input');
const phoneInput = document.getElementById('phone_input');
// const levelOfExperienceInput = document.getElementById('experience_input');
const form = document.getElementById('formSummit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let name = nameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let passConfirmation = passwordConfirmationInput.value;
  let age = parseInt(ageInput.value);
  let url = urlInput.value;
  let phone = phoneInput.value;

  createErrorAlert(nameValidatorFunc(name));
  createErrorAlert(lastNameValidatorFunc(lastName));
  createErrorAlert(emailValidatorFunc(email));
  createErrorAlert(passwordValidatorFunc(password, passConfirmation));
  createErrorAlert(numberValidatorFunc(age));
  createErrorAlert(urlValidatorFunc(url));
  createErrorAlert(telValidatorFunc(phone));
});
