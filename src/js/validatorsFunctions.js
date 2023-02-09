import {
  emailValidator,
  numberValidator,
  stringValidator,
  telValidator,
  urlValidator,
} from './validators.js';

export const nameValidatorFunc = (test) => {
  return {
    result: stringValidator.test(test),
    name: 'name',
  };
};

export const lastNameValidatorFunc = (test) => {
  return {
    result: stringValidator.test(test),
    name: 'last name',
  };
};

export const emailValidatorFunc = (test) => {
  return {
    result: emailValidator.test(test),
    name: 'email',
  };
};

export const numberValidatorFunc = (test) => {
  return {
    result: numberValidator.test(test),
    name: 'age',
  };
};

export const urlValidatorFunc = (test) => {
  return {
    result: urlValidator.test(test),
    name: 'website',
  };
};

export const telValidatorFunc = (test) => {
  return {
    result: telValidator.test(test),
    name: 'phone',
  };
};

export const passwordValidatorFunc = (pass, passConfirmation) => {
  return {
    result: pass === passConfirmation,
    name: 'password'
  }
}
