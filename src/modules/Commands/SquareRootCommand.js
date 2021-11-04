import Command from './Command';

export default class SquareRootCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    try {
      if (this.operand1 === 0) {
        throw Error('try to take root from zero');
      }
      this.subject.setOperands(this.subject.operand1 ** (1 / 2));
    } catch (e) {
      this.subject.renderError(e);
    }
  }
}