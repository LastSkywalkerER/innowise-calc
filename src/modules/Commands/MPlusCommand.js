import Command from './Command';

export default class MPlusCommand extends Command {
  execute(value) {
    return {
      memory: this.memory + value,
    };
  }
}