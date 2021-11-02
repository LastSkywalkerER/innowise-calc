import {
  buttonsNumbers,
  buttonsSimpleRight,
} from '../buttonNames';
import Command from './Command';

export default class ButtonsCommand extends Command {
  constructor(subject, buttonList) {
    super(subject);
    this.buttonList = buttonList;
  }

  commandExecute(SomeCommand, text) {
    const command = new SomeCommand(this.subject);
    if (text !== this.buttonList.reset.name && text !== this.buttonList.eq.name) {
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
      if (text === this.buttonList.dot.name) {
        this.commandExecute(this.buttonList[button].Command, text);
        return;
      }
      this.subject.render(text);
      return;
    }

    if (buttonsSimpleRight.includes(text)) {
      if (text === this.buttonList.eq.name) {
        this.commandExecute(this.buttonList[button].Command, text);
        return;
      }
      this.subject.renderAction(text, this.buttonList[button].Command);
      return;
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
  }
}