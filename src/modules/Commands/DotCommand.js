import Command from './Command';

export default class DotCommand extends Command {
  execute(text) {
    if (!this.subject.dotFlag) {
      this.subject.dotFlag = true;
      this.subject.render(text);
    }
  }
}