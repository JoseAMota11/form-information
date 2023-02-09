import { emailValidator, numberValidator, stringValidator, telValidator, urlValidator } from './validators.js';

export const stringValidatorFunc = (test) => stringValidator.test(test);

export const emailValidatorFunc = (test) => emailValidator.test(test);

export const numberValidatorFunc = (test) => numberValidator.test(test);

export const urlValidatorFunc = (test) => urlValidator.test(test);

export const telValidatorFunc = (test) => telValidator.test(test);

export const passwordValidatorFunc = (pass, passConfirmation) => pass === passConfirmation;
