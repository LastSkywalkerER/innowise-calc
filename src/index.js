import changeTheme from './modules/changeTheme';
import RenderButtons from './modules/drawers/RenderButtons';
import CommandsManager from './modules/helpers/CommandsManager';
import СalcMath from './modules/CalcMath';
import CommandsContainer from './modules/helpers/CommandsContainer';
import {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames,
} from './modules/helpers/buttonNames';

import './style.sass';
import './checkbox.sass';

class CalculatorApp {
  constructor() {
    this.drawer = new RenderButtons(document.getElementById('calculator'));
    this.calculator = new СalcMath();
    this.container = new CommandsContainer();
    this.commandsManager = new CommandsManager(this.calculator);
  }

  start() {
    changeTheme();

    this.drawer.renderLayout((event) => {
      if (event.target.hasAttribute('calcAct')) {
        this.commandsManager.execute(event.target.getAttribute('calcAct'));
      }
    });

    this.drawer.appendButtons(buttonsHard, 'calculator-buttons_hard');
    this.drawer.appendButtons(buttonsSimpleUp, 'calculator-buttons_simple numbers-block simple--up');
    this.drawer.appendButtons(buttonsNumbers, 'calculator-buttons_simple numbers-block numbers');
    this.drawer.appendButtons(buttonsSimpleRight, 'calculator-buttons_simple simple--right');

    this.drawer.bindKeyboard((key) => {
      const button = buttonNames.getButtonByOperator(key);
      // this.commandsManager.execute(button.name);
      return button;
    });

    this.calculator.operandsManager.subscribe(({
      operand1,
      operand2,
      operator,
      errorOccured,
    }) => {
      if (errorOccured) {
        this.drawer.setInputValue(`${errorOccured}`);
        return;
      }

      if (operand2) {
        this.drawer.setInputValue(`${operand1}${operator}${operand2}`);
      } else if (operator) {
        this.drawer.setInputValue(`${operand1}${operator}`);
      } else {
        this.drawer.setInputValue(`${operand1}`);
      }
    });
  }
}

new CalculatorApp().start();