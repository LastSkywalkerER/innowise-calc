import Command from './Command';

export default class MPlusCommand extends Command {
  execute() {
    this.subject.submit();
    this.subject.setMemory(this.subject.operand1);
  }
}