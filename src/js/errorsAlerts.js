const labels = document.getElementsByClassName('container__label');
const COLOR_RED = '#FF4646';
const COLOR_BLACK = '#e7ecef';
const ERROR_MESSAGE = ' is incorrect';

export const createErrorAlert = ({ result, name, value }) => {
  const thisLabel = labels.namedItem(name);

  if (!result) {
    if (!thisLabel.textContent.includes(ERROR_MESSAGE)) {
      thisLabel.textContent += ERROR_MESSAGE;
    }
    thisLabel.style.color = COLOR_RED;
    thisLabel.nextElementSibling.style.outline = `${COLOR_RED} 1px solid`;
  } else {
    thisLabel.textContent = thisLabel.textContent.replace(ERROR_MESSAGE, '');
    thisLabel.style.color = COLOR_BLACK;
    thisLabel.nextElementSibling.style.outline = 'none';
    console.log(`${name.toUpperCase()}: ${value}`);
  }
};
