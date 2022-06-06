import Command from './Command';

export default class TenInXCommand extends Command {
  execute() {
    return {
      operand1: 10 ** this.operand1,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
    };
  }
}