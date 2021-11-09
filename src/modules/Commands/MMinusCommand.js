import Command from './Command';

export default class MMinusCommand extends Command {
  execute(value) {
    return {
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
      memory: this.memory - value,
    };
  }
}