import Command from './Command';

export default class OneDevXCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.operand2 = this.subject.operand2;
    this.operator = this.subject.operator;
    if (this.operand2) {
      try {
        if (this.operand2 === 0) {
          throw Error('try to devide by zero');
        }
        this.subject.setOperands(this.operand1, 1 / this.operand2, this.operator);
      } catch (e) {
        this.subject.renderError(e);
      }
    } else {
      try {
        if (this.operand1 === 0) {
          throw Error('try to devide by zero');
        }
        this.subject.setOperands(1 / this.operand1);
      } catch (e) {
        this.subject.renderError(e);
      }
    }
  }
}