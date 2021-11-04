import Command from './Command';

export default class MMinusCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setMemory(-this.subject.operand1);
  }
}