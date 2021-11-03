import Command from './Command';

export default class MRCommand extends Command {
  execute() {
    this.subject.setOperands(this.subject.memory);
  }
}