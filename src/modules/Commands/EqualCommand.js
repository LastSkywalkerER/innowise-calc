import Command from './Command';

export default class EqualCommand extends Command {
  execute() {
    this.subject.submit();
  }
}