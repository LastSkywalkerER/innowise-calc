import Command from './Command';

export default class YRootCommand extends Command {
  execute() {
    this.operand1 = this.subject.operand1;
    this.operand2 = this.subject.operand2;
    try {
      if (this.operand1 === 0) {
        throw Error('try to devide by zero');
      }
      if (this.operand2 <= 0) {
        throw Error('invalid operand under the root');
      }
      this.subject.renderAnswer(this.operand2 ** (1 / this.operand1));
    } catch (e) {
      this.subject.renderError(e);
    }
  }
}