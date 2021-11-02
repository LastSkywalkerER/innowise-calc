import Command from './Command';

export default class ResetCommand extends Command {
  execute() {
    this.subject.reset();
  }
}