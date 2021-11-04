import Command from './Command';

export default class PercentCommand extends Command {
  execute() {
    this.subject.getOperands();
    if (this.subject.operand2) {
      this.subject.setOperands(this.subject.operand1, this.subject.operand2 / 100);
    }
  }
}