import {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
} from './buttonNames';

const renderButton = (button, place) => {
  const buttonElement = document.createElement('div');
  buttonElement.classList.add('button');

  if (button.buttonText === '0') {
    buttonElement.classList.add('zero');
  }

  buttonElement.innerText = button.buttonText;
  buttonElement.setAttribute('calcAct', button.name);
  place.append(buttonElement);
};

export default (
  buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock,
) => {
  buttonsHard.forEach((button) => {
    renderButton(button, buttonsHardBlock);
  });
  buttonsSimpleUp.forEach((button) => {
    renderButton(button, buttonsSimpleUpBlock);
  });
  buttonsSimpleRight.forEach((button) => {
    renderButton(button, buttonsSimpleRightBlock);
  });
  buttonsNumbers.forEach((button) => {
    renderButton(button, buttonsNumbersBlock);
  });
};