import Command from './Command';

export default class MRCommand extends Command {
  execute() {
    return {
      operand1: this.memory,
      operand2: this.operand2,
      operator: this.operator,
      memory: this.memory,
    };
  }
}