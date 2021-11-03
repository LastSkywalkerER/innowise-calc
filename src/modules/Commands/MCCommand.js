import Command from './Command';

export default class MCCommand extends Command {
  execute() {
    this.subject.memory = 0;
  }
}