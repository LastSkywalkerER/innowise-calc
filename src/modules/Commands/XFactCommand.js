/* eslint-disable no-plusplus */
import Command from './Command';

export default class XFactCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    try {
      if (this.operand1 < 0 || this.operand1 === Infinity) {
        throw Error('invalid operand');
      }
      let factorial = 1;
      if (!String(this.operand1).split('').includes('.')) {
        for (let i = 1; i <= this.operand1; i++) {
          factorial *= i;
        }
      } else {
        factorial = ((2 * 3.1415926535 * this.operand1) ** (1 / 2)) *
          (this.operand1 ** this.operand1) * (2.7182818284 ** -this.operand1);
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