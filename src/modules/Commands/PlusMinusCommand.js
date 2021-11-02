import Command from './Command';

export default class PlusMinusCommand extends Command {
  execute() {
    this.subject.toggleMinus();
  }
}