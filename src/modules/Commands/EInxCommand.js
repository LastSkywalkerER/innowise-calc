import Command from './Command';

export default class EInxCommand extends Command {
  execute() {
    return {
      operand1: 2.71828182846 ** this.operand1,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}