import Command from './Command';

export default class XSquareCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.subject.setOperands(this.operand1 ** 2);
  }

  unDo() {
    this.subject.setOperands(this.operand1);
  }
}