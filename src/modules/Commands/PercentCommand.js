import Command from './Command';

export default class PercentCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.operand2 = this.subject.operand2;
    this.operator = this.subject.operator;
    if (this.subject.operand2) {
      this.subject.setOperands(this.subject.operand1, this.subject.operand2 / 100, this.operator);
    }
  }
}