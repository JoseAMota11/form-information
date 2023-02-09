const labels = document.getElementsByClassName('container__label');

export const createErrorAlert = ({ result, name }) => {
  const errorMessage = 'error'

  for (let i = 0; i < labels.length; i++) {
    if (
      result === false &&
      name === labels[i].textContent.toLocaleLowerCase()
    ) {
      labels[i].textContent += ` ${errorMessage}`;
      labels[i].style.color = '#EC0000'
    }
  }
};
