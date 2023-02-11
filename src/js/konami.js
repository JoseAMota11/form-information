const SECRETE_CODE = 'jamashippuden';
const button = document.getElementById('konami_btn');
const konamiContainer = document.getElementById('konami');
const formContainer = document.getElementById('formSummit');
let SAVE_TYPED_KEYS = [];

button.addEventListener('click', (e) => {
  konamiContainer.style.display = 'none';
  formContainer.style.display = 'block';
});

export const konami = (e) => {
  SAVE_TYPED_KEYS.push(e.key);
  SAVE_TYPED_KEYS.slice(-SECRETE_CODE.length - 1, SAVE_TYPED_KEYS.length - SECRETE_CODE.length);

  if (SAVE_TYPED_KEYS.join('').includes(SECRETE_CODE)) {
    konamiContainer.style.display = 'block';
    formContainer.style.display = 'none';
  }
};
