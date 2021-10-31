import {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
} from './buttonNames';

const renderButton = (name, place) => {
  const button = document.createElement('button');
  button.classList.add('button');

  if (name === '0') {
    button.classList.add('zero');
  }

  button.innerText = name;
  button.setAttribute('calcAct', name);
  place.append(button);
};

export default (
  buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock,
) => {
  buttonsHard.forEach((name) => {
    renderButton(name, buttonsHardBlock);
  });
  buttonsSimpleUp.forEach((name) => {
    renderButton(name, buttonsSimpleUpBlock);
  });
  buttonsSimpleRight.forEach((name) => {
    renderButton(name, buttonsSimpleRightBlock);
  });
  buttonsNumbers.forEach((name) => {
    renderButton(name, buttonsNumbersBlock);
  });
};