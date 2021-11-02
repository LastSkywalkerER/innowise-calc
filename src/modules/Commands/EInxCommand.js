import Command from './Command';

export default class EInxCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(2.71828182846 ** this.subject.operand1);
  }
}