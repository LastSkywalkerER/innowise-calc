import {
  buttonsNumbers,
  buttonNames,
  nonHistory,
  nonSubmit,
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

  commandExecute(SomeCommand, text) {
    const command = new SomeCommand(this.calculator);
    if (this.calculator.operator &&
      !nonSubmit.includes(text)) {
      this.calculator.submit();
    }
    if (!nonHistory.includes(text)) {
      this.calculator.commands.push(command);
    }
    command.execute(text);
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
      //
      return;
    }

    if (memoryButtons.includes(button)) {
      //
      return;
    }

    if (buttonNames.eq === button) {
      this.calculator.submit();
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