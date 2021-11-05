/* eslint-disable no-plusplus */
import Command from './Command';

export default class XFactCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    try {
      if (this.operand1 <= 0) {
        throw Error('invalid operand');
      }
      let factorial = 1;
      for (let i = 1; i <= this.operand1; i++) {
        factorial *= i;
      }
      this.subject.setOperands(factorial);
    } catch (e) {
      this.subject.renderError(e);
    }
  }

  unDo() {
    this.subject.setOperands(this.operand1);
  }
}