import Command from './Command';

export default class TenInXCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(10 ** this.subject.operand1);
  }
}