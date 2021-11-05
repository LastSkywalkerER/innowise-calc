import Command from './Command';

export default class XCubeCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.operand1 = this.subject.operand1;
    this.subject.setOperands(this.operand1 ** 3);
  }

  unDo() {
    this.subject.setOperands(this.operand1);
  }
}