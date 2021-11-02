import Command from './Command';

export default class PercentCommand extends Command {
  execute() {
    if (this.subject.command) {
      this.subject.getOperands();
      this.subject.setOperands(this.subject.operand1, this.subject.operand2 / 100);
    }
  }
}