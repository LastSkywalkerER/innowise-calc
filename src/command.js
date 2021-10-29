/* eslint-disable no-param-reassign */
import {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames,
} from './buttonNames';
import СalcMath from './calcMath';

const calcMath = new СalcMath();

export default (event, input) => {
  const button = event.target.getAttribute('calcAct');

  if (buttonsNumbers.includes(button)) {
    input.value += button;
  }

  if (
    buttonsSimpleRight.includes(button) ||
    buttonsSimpleUp.includes(button) ||
    buttonsHard.includes(button)
  ) {
    if (
      !calcMath.action &&
      button !== buttonNames.eq &&
      button !== buttonNames.reset
    ) {
      calcMath.operand1 = +input.value;
      input.value += button;
      calcMath.action = button;
    }

    if (button === buttonNames.reset) {
      input.value = '';
    }

    if (button === buttonNames.eq) {
      calcMath.operand2 = +input.value.slice(
        input.value.indexOf(calcMath.action) + 1,
      );

      switch (calcMath.action) {
        case buttonNames.dev:
          input.value = calcMath.commandDev(
            calcMath.operand1,
            calcMath.operand2,
          );
          break;
        case buttonNames.mult:
          input.value = calcMath.commandMult(
            calcMath.operand1,
            calcMath.operand2,
          );
          break;
        case buttonNames.minus:
          input.value = calcMath.commandMinus(
            calcMath.operand1,
            calcMath.operand2,
          );
          break;
        case buttonNames.plus:
          input.value = calcMath.commandPlus(
            calcMath.operand1,
            calcMath.operand2,
          );
          break;
        default:
          break;
      }
    }
  }
};