import Command from './Command';

export default class PlusMinusCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.operand2 = this.subject.operand2;
    if (this.operand2 && !this.subject.finalOperation) {
      this.subject.setOperands(this.operand1, -this.operand2);
    } else {
      this.subject.setOperands(-this.operand1);
    }
  }
}