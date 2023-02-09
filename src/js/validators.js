// Validate name a last name.
export const stringValidator = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;


// Validate email.
export const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Validate numbers
export const numberValidator = /\d+/;

// Validate URL.
export const urlValidator = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

// Validate tel.
export const telValidator = /^[0-9]{4}[\-][0-9]{4}$/
