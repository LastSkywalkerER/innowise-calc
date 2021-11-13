import {
  buttonsNumbers,
  buttonNames,
  resetableButtons,
  memoryButtons,
  answerWithOneOperand,
  answerWithTwoOperands,
  changeOneOperand,
} from './buttonNames';

export default class CommandsManager {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(buttonName) {
    const button = buttonNames[buttonName];

    if (buttonsNumbers.includes(button)) {
      if (this.calculator.finalOperation) {
        this.calculator.reset();
      }
      this.calculator.render(button.renderText);
      return;
    }

    if (resetableButtons.includes(button)) {
      this.calculator.finalOperation = true;
    }

    if (answerWithTwoOperands.includes(button)) {
      this.calculator.renderAction(button);
      return;
    }

    if (answerWithOneOperand.includes(button)) {
      this.calculator.submit();
      this.calculator.executer(button.Command);
      return;
    }

    if (changeOneOperand.includes(button)) {
      this.calculator.executer(button.Command, true);
      return;
    }

    if (memoryButtons.includes(button)) {
      this.calculator.setMemory(button);
      return;
    }

    if (buttonNames.eq === button) {
      this.calculator.submit(true);
      return;
    }

    if (buttonNames.reset === button) {
      this.calculator.reset();
      return;
    }
    if (buttonNames.unDo === button) {
      this.calculator.unDo();
    }
  }
}