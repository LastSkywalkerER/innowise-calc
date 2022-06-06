import Command from './Command';

export default class PlusCommand extends Command {
  execute() {
    return {
      operand1: this.operand1 + this.operand2,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
    };
  }
}