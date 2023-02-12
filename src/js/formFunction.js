import { createErrorAlert } from './err/errorsAlerts.js';
import { getCheckboxItems, invalidChars } from './helpers.js';
import {
  nameValidatorFunc,
  lastNameValidatorFunc,
  emailValidatorFunc,
  numberValidatorFunc,
  passwordValidatorFunc,
  telValidatorFunc,
  urlValidatorFunc,
  experienceValidatorFunc,
} from './validate/validatorsFunctions.js';

const nameInput = document.getElementById('name_input');
const lastNameInput = document.getElementById('last_name_input');
const emailInput = document.getElementById('email_input');
const passwordInput = document.getElementById('password_input');
const passwordConfirmationInput = document.getElementById('password_confirmation_input');
const ageInput = document.getElementById('age_input');
const urlInput = document.getElementById('url_input');
const phoneInput = document.getElementById('phone_input');
const levelOfExperienceInput = document.getElementById('experience_input');
const experienceSpan = document.getElementById('experience');
const checkboxElements = document.getElementsByClassName('checked');

levelOfExperienceInput.addEventListener('change', (e) => {
  experienceSpan.textContent = `Experience: ${e.target.value}`;
});

// Verify that the input number, cannot 
// receive the letter "e", nor + and - sign.
ageInput.addEventListener('keydown', (e) => {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

export const formEventListener = (e) => {
  e.preventDefault();

  let name = nameInput.value;
  let lastName = lastNameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let passConfirmation = passwordConfirmationInput.value;
  let age = parseInt(ageInput.value);
  let url = urlInput.value;
  let phone = phoneInput.value;
  let experience = levelOfExperienceInput.value;

  createErrorAlert(nameValidatorFunc(name));
  createErrorAlert(lastNameValidatorFunc(lastName));
  createErrorAlert(emailValidatorFunc(email));
  createErrorAlert(passwordValidatorFunc(password, passConfirmation));
  createErrorAlert(numberValidatorFunc(age));
  createErrorAlert(urlValidatorFunc(url));
  createErrorAlert(telValidatorFunc(phone));
  createErrorAlert(experienceValidatorFunc(experience));
  getCheckboxItems(checkboxElements);
};
