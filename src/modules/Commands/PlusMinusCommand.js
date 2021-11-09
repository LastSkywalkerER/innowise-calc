import Command from './Command';

export default class PlusMinusCommand extends Command {
  execute() {
    if (this.operand2) {
      return {
        operand1: this.operand1,
        operand2: -this.operand2,
        operator: this.operator,
      };
    }
    return {
      operand1: -this.operand1,
    };
  }
}