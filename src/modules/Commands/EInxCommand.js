import Command from './Command';

export default class EInxCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.subject.setOperands(2.71828182846 ** this.operand1);
  }

  unDo() {
    this.subject.setOperands(this.operand1);
  }
}