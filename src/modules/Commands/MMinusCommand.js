import Command from './Command';

export default class MMinusCommand extends Command {
  execute() {
    this.subject.submit();
    this.subject.setMemory(-this.subject.operand1);
  }
}