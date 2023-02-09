// Validate name a last name.
const stringValidator = /([A-Za-z\s])\w+/g;

// Validate email.
const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Validate numbers
const numberValidator = /\d+]/;

// Validate URL.
const urlValidator = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;

// Validate tel.
const telValidator = /^[0-9]{4}[\-][0-9]{4}$/
