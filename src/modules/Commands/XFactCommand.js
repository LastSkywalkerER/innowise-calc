/* eslint-disable no-plusplus */
import Command from './Command';

export default class XFactCommand extends Command {
  execute() {
    let factorial = 1;
    this.subject.getOperands();
    for (let i = 1; i <= this.subject.operand1; i++) {
      factorial *= i;
    }
    this.subject.setOperands(factorial);
  }
}