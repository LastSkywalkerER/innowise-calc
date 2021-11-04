import Command from './Command';

export default class SquareRootCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    try {
      if (this.operand1 <= 0) {
        throw Error('invalid operand under the root');
      }
      this.subject.setOperands(this.subject.operand1 ** (1 / 2));
    } catch (e) {
      this.subject.renderError(e);
    }
  }
}