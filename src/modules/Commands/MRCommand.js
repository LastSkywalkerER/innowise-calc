import Command from './Command';

export default class MRCommand extends Command {
  execute() {
    return {
      operand1: this.memory,
      memory: this.memory,
    };
  }
}