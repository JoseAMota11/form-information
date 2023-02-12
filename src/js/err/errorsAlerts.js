const labels = document.getElementsByClassName('container__label');
const btn = document.getElementById('send');
const COLOR_RED = '#FF4646';
const COLOR_WHITE = '#fff';
const COLOR_GREEN = '#14A300';
const ERROR_MESSAGE = ' is incorrect';
const SECONDS = 2000;

export const createErrorAlert = ({ result, name, value }) => {
  const thisLabel = labels.namedItem(name);

  if (!result) {
    if (!thisLabel.textContent.includes(ERROR_MESSAGE)) {
      thisLabel.textContent += ERROR_MESSAGE;
    }
    thisLabel.style.color = COLOR_RED;
    thisLabel.nextElementSibling.nextElementSibling.style.outline = `${COLOR_RED} 1px solid`;
  } else {
    thisLabel.textContent = thisLabel.textContent.replace(ERROR_MESSAGE, '');
    thisLabel.style.color = COLOR_WHITE;
    thisLabel.nextElementSibling.nextElementSibling.style.outline = 'none';
    btn.style.backgroundColor = COLOR_GREEN;
    btn.textContent = 'sent';
    console.log(`${name.toUpperCase()}: ${value}`);
  }

  if (result) {
    let ID = setInterval(cleanBottom, SECONDS);

    function cleanBottom() {
      btn.style.backgroundColor = COLOR_WHITE;
      btn.textContent = 'send';
      clearInterval(ID);
    };
  }
};
