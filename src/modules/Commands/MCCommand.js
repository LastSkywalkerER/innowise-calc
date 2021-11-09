import Command from './Command';

export default class MCCommand extends Command {
  // eslint-disable-next-line class-methods-use-this
  execute() {
    return {
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
      memory: 0,
    };
  }
}