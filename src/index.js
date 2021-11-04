import changeTheme from './modules/changeTheme';
import renderButtons from './modules/renderButtons';
import Command from './modules/Commands/ButtonsCommand';
import СalcMath from './modules/CalcMath';
import {
  buttonNames,
} from './modules/buttonNames';

import './style.sass';
import './checkbox.sass';

const calculator = document.getElementById('calculator');
const input = calculator.querySelector('.text-field__input');
const buttons = calculator.querySelector('.calculator-buttons');
const buttonsHardBlock = buttons.querySelector('.calculator-buttons_hard');
const buttonsSimpleUpBlock = buttons.querySelector('.simple--up');
const buttonsSimpleRightBlock = buttons.querySelector('.simple--right');
const buttonsNumbersBlock = buttons.querySelector('.numbers');

const command = new Command(new СalcMath(input), buttonNames);

changeTheme();

renderButtons(
  buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock,
);

buttons.addEventListener('click', (event) => {
  if (event.target.hasAttribute('calcAct')) {
    command.execute(event.target.getAttribute('calcAct'));
  }
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  // eslint-disable-next-line prefer-destructuring
  let key = event.key;

  switch (key) {
    case 'Delete':
      key = 'AC';
      break;
    case 'Enter':
      key = '=';
      break;
    default:
      break;
  }
  try {
    command.execute(key);
    const button = buttons.querySelector(`[calcAct="${key}"]`);
    button.classList.add('clicked-button');
    setTimeout(() => {
      button.classList.remove('clicked-button');
    }, 300);
    // eslint-disable-next-line no-empty
  } catch (e) {

  }
});

buttons.addEventListener('mousedown', (event) => {
  if (event.target.hasAttribute('calcAct')) {
    event.target.classList.add('clicked-button');
    setTimeout(() => {
      event.target.classList.remove('clicked-button');
    }, 300);
  }
});