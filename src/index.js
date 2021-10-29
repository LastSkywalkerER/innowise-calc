'use strict';

import {
  renderButtons
} from './renderButtons';
import {
  command
} from './command';

import './style.sass';

const calculator = document.getElementById('calculator'),
  input = calculator.getElementsByTagName('input'),
  buttons = calculator.querySelector('.calculator-buttons'),
  buttonsHardBlock = buttons.querySelector('.calculator-buttons_hard'),
  buttonsSimpleUpBlock = buttons.querySelector('.simple--up'),
  buttonsSimpleRightBlock = buttons.querySelector('.simple--right'),
  buttonsNumbersBlock = buttons.querySelector('.numbers');

renderButtons(buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock);

buttons.addEventListener('click', event => {
  command(event, input);
});

buttons.addEventListener('mousedown', event => {
  if (event.target.hasAttribute('calcAct')) {
    event.target.classList.add('clicked-button');
    setTimeout(() => {
      event.target.classList.remove('clicked-button');
    }, 300);
  }
});