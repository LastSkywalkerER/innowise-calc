import Command from './Command';

export default class MinusCommand extends Command {
  execute() {
    this.operand1 = this.subject.operand1;
    this.operand2 = this.subject.operand2;
    this.operator = this.subject.operator;

    this.subject.renderAnswer(this.subject.operand1 - this.subject.operand2);
  }

  unDo() {
    this.subject.setOperands(this.operand1, this.operand2, this.operator);
  }
}