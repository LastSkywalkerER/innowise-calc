import Command from './Command';

export default class TenInXCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.subject.setOperands(10 ** this.operand1);
  }

  unDo() {
    this.subject.setOperands(this.operand1);
  }
}