import Command from './Command';

export default class MCCommand extends Command {
  // eslint-disable-next-line class-methods-use-this
  execute() {
    return {
      memory: 0,
    };
  }
}