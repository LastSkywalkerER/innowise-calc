'use strict';

import './style.sass';

const calculator = document.getElementById('calculator'),
  input = calculator.getElementsByTagName('input'),
  buttons = calculator.querySelector('.calculator-buttons'),
  buttonsHardBlock = buttons.querySelector('.calculator-buttons_hard'),
  buttonsSimpleUpBlock = buttons.querySelector('.simple--up'),
  buttonsSimpleRightBlock = buttons.querySelector('.simple--right'),
  buttonsNumbersBlock = buttons.querySelector('.numbers');

const renderButton = (name, place) => {
  const button = document.createElement('button');
  button.classList.add('button');
  button.innerText = name;
  place.append(button);
};

const renderButtons = () => {
  const buttonsHard = ['mc', 'm+', 'm-', 'mr', 'x2', 'x3', 'xy', 'ex', '10x', '1/x', '2x', '3x', 'yx', 'x!'],
    buttonsSimpleUp = ['AC', '+/-', '%'],
    buttonsSimpleRight = ['/', '*', '-', '+', '='],
    buttonsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

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

renderButtons();