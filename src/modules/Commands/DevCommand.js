import Command from './Command';

export default class DevCommand extends Command {
  execute({
    operand1,
    operand2,
    operator,
  }) {
    try {
      if (operand2 === 0) {
        throw Error('try to devide by zero');
      }
      this.operand1 = operand1;
      this.operand2 = operand2;
      this.operator = operator;
      this.subject.renderAnswer(operand1 / operand2);
    } catch (e) {
      this.subject.renderError(e);
    }
  }

  unDo() {
    this.subject.render(this.operand1);
    this.subject.render('/');
    this.subject.render(this.operand2);
  }
}