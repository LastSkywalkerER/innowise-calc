import Command from './Command';

export default class DevCommand extends Command {
  execute() {
    try {
      if (this.subject.operand2 === 0) {
        throw Error('try to devide by zero');
      }
      this.subject.renderAnswer(this.subject.operand1 / this.subject.operand2);
    } catch (e) {
      this.subject.renderError(e);
    }
  }
}