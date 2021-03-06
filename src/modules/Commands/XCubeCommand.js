import Command from './Command';

export default class XCubeCommand extends Command {
  execute() {
    return {
      operand1: this.operand1 ** 3,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}