import Command from './Command';

export default class YRootCommand extends Command {
  execute() {
    this.subject.renderAnswer(this.subject.operand2 ** (1 / this.subject.operand1));
  }
}