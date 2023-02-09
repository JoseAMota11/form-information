const labels = document.getElementsByClassName('container__label');
const COLOR_RED = '#EC0000';
const COLOR_BLACK = '#000';
const ERROR_MESSAGE = ' is incorrect';

export const createErrorAlert = ({ result, name }) => {
  const thisLabel = labels.namedItem(name);

  if (result === false) {
    thisLabel.textContent = `${name[0].toUpperCase() + name.slice(1, name.length)} ${ERROR_MESSAGE}`;
    thisLabel.style.color = COLOR_RED;
    thisLabel.nextElementSibling.style.outline = `${COLOR_RED} 1px solid`;
  } else {
    thisLabel.textContent = thisLabel.textContent.replace(ERROR_MESSAGE, '');
    thisLabel.style.color = COLOR_BLACK;
    thisLabel.nextElementSibling.style.outline = 'none';
  }
};
