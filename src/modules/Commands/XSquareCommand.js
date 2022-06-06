import Command from './Command';

export default class XSquareCommand extends Command {
  execute() {
    return {
      operand1: this.operand1 ** 2,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}