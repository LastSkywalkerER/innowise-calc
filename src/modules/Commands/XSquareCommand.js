import Command from './Command';

export default class XSquareCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(this.subject.operand1 ** 2);
  }
}