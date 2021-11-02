import Command from './Command';

export default class CubeRootCommand extends Command {
  execute() {
    this.subject.getOperands();
    this.subject.setOperands(this.subject.operand1 ** (1 / 3));
  }
}