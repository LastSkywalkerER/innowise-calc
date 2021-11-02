import Command from './Command';

export default class XCubeCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(this.subject.operand1 ** 3);
  }
}