import Command from './Command';

export default class UnDoCommnd extends Command {
  execute() {
    this.subject.unDo();
  }
}