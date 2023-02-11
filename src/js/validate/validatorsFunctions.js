import {
  emailValidator,
  numberValidator,
  stringValidator,
  telValidator,
  urlValidator,
} from './validators.js';

export const nameValidatorFunc = (test) => {
  return {
    value: test,
    result: stringValidator.test(test),
    name: 'name',
  };
};

export const lastNameValidatorFunc = (test) => {
  return {
    value: test,
    result: stringValidator.test(test),
    name: 'last',
  };
};

export const emailValidatorFunc = (test) => {
  return {
    value: test,
    result: emailValidator.test(test),
    name: 'email',
  };
};

export const numberValidatorFunc = (test) => {
  return {
    value: test,
    result: numberValidator.test(test),
    name: 'age',
  };
};

export const urlValidatorFunc = (test) => {
  return {
    value: test,
    result: urlValidator.test(test),
    name: 'website',
  };
};

export const telValidatorFunc = (test) => {
  return {
    value: test,
    result: telValidator.test(test),
    name: 'phone',
  };
};

export const passwordValidatorFunc = (pass, passConfirmation) => {
  return {
    value: pass,
    result: pass === passConfirmation,
    name: 'password'
  }
}

export const experienceValidatorFunc = (expe) => {
  return {
    value: expe,
    result: true,
    name: 'expe'
  }
}
