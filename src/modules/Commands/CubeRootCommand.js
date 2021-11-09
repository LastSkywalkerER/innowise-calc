import Command from './Command';

export default class CubeRootCommand extends Command {
  execute() {
    if (this.operand1 <= 0) {
      throw Error('invalid operand under the root');
    }
    return {
      operand1: this.operand1 ** (1 / 3),
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}