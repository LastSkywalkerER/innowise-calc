import Command from './Command';

export default class MMinusCommand extends Command {
  execute(value) {
    return {
      memory: this.memory - value,
    };
  }
}