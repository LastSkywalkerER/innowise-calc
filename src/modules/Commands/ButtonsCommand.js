import {
  buttonsNumbers,
  buttonsSimpleRight,
  buttonNames,
} from '../buttonNames';
import Command from './Command';

export default class ButtonsCommand extends Command {
  constructor(subject) {
    super(subject);
    this.buttonList = buttonNames;

    this.nonHistory = [
      this.buttonList.dot.name,
      this.buttonList.reset.name,
      this.buttonList.eq.name,
      this.buttonList.percent.name,
      this.buttonList.oneDevX.name,
      this.buttonList.mc.name,
      this.buttonList.mPlus.name,
      this.buttonList.mMinus.name,
      this.buttonList.mr.name,
      this.buttonList.unDo.name,
    ];
    this.nonSubmit = [
      this.buttonList.dot.name,
      this.buttonList.unDo.name,
      this.buttonList.percent.name,
      this.buttonList.oneDevX.name,
    ];
    this.resetableButtons = [
      this.buttonList.eq.name,
      this.buttonList.xSquare.name,
      this.buttonList.xCube.name,
      this.buttonList.xy.name,
      this.buttonList.ex.name,
      this.buttonList.tenInX.name,
      this.buttonList.squareRoot.name,
      this.buttonList.cubeRoot.name,
      this.buttonList.yRoot.name,
      this.buttonList.xFact.name,
      this.buttonList.mMinus.name,
      this.buttonList.mPlus.name,
    ];
  }

  commandExecute(SomeCommand, text) {
    const command = new SomeCommand(this.subject);
    if (this.subject.operator &&
      !this.nonSubmit.includes(text)) {
      this.subject.submit();
    }
    if (!this.nonHistory.includes(text)) {
      this.subject.commands.push(command);
    }
    command.execute(text);
  }

  execute(text) {
    const button = Object.keys(this.buttonList).reduce((previousValue, currentValue) => {
      if (this.buttonList[currentValue].name === text) {
        return currentValue;
      }
      return previousValue;
    }, '');

    if (buttonsNumbers.includes(text)) {
      if (this.subject.finalOperation) {
        this.subject.reset();
      }
      if (text !== this.buttonList.dot.name) {
        this.subject.render(text);
        return;
      }
    }

    if (buttonsSimpleRight.includes(text)) {
      if (text !== this.buttonList.eq.name) {
        this.subject.renderAction(text, this.buttonList[button].Command);
        return;
      }
    }

    if (text === this.buttonList.xy.name) {
      this.subject.renderAction('^', this.buttonList[button].Command);
      return;
    }

    if (text === this.buttonList.yRoot.name) {
      this.subject.renderAction('√', this.buttonList[button].Command);
      return;
    }

    this.commandExecute(this.buttonList[button].Command, text);

    if (this.resetableButtons.includes(text)) {
      this.subject.finalOperation = true;
    }
  }
}