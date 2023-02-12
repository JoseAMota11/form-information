const SECRETE_CODE = 'jamashippuden';
const button = document.getElementById('konami_btn');
const konamiContainer = document.getElementById('konami');
const formContainer = document.getElementById('formSummit');
let SAVE_TYPED_KEYS = '';

button.addEventListener('click', () => {
  konamiContainer.style.display = 'none';
  formContainer.style.display = 'grid';
});

export const konami = (e) => {
  SAVE_TYPED_KEYS += (e.key?.toLowerCase());
  SAVE_TYPED_KEYS.slice(-SECRETE_CODE.length - 1, SAVE_TYPED_KEYS.length - SECRETE_CODE.length);

  if (SAVE_TYPED_KEYS.includes(SECRETE_CODE)) {
    konamiContainer.style.display = 'flex';
    konamiContainer.style.flexDirection = 'column';
    formContainer.style.display = 'none';
    SAVE_TYPED_KEYS = '';
  }
};
