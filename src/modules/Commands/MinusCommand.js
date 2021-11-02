import Command from './Command';

export default class MinusCommand extends Command {
  execute() {
    this.subject.renderAnswer(this.subject.operand1 - this.subject.operand2);
  }
}