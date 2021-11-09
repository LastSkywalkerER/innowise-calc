import Command from './Command';

export default class SquareRootCommand extends Command {
  execute() {
    if (this.operand1 <= 0) {
      throw Error('invalid operand under the root');
    }
    return this.operand1 ** (1 / 2);
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}