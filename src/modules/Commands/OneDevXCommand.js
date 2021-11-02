import Command from './Command';

export default class OneDevXCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(1 / this.subject.operand1);
  }
}