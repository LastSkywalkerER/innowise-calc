import changeTheme from './modules/changeTheme';
import renderButtons from './modules/renderButtons';
import CommandsManager from './modules/CommandsManager';
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

const commandsManager = new CommandsManager(new СalcMath(input));

changeTheme();

renderButtons(
  buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock,
);

buttons.addEventListener('click', (event) => {
  if (event.target.hasAttribute('calcAct')) {
    commandsManager.execute(event.target.getAttribute('calcAct'));
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
    case 'Backspace':
      key = 'AC';
      break;
    case 'Enter':
      key = '=';
      break;
    case ',':
      key = '.';
      break;
    default:
      break;
  }

  try {
    const button = buttonNames[Object.keys(buttonNames).reduce((prev, curr) => {
      if (buttonNames[curr].buttonText === key) {
        return curr;
      }
      return prev;
    }, {})];
    commandsManager.execute(button.name);
    const buttonElement = buttons.querySelector(`[calcAct="${button.name}"]`);
    buttonElement.classList.add('clicked-button');
    setTimeout(() => {
      buttonElement.classList.remove('clicked-button');
    }, 300);
    // eslint-disable-next-line no-empty
  } catch (e) {
    // console.warn(e);
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