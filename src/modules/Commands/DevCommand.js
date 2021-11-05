import Command from './Command';

export default class DevCommand extends Command {
  execute() {
    try {
      this.operand1 = this.subject.operand1;
      this.operand2 = this.subject.operand2;
      this.operator = this.subject.operator;
      if (this.operand2 === 0) {
        throw Error('try to devide by zero');
      }
      console.log(this.operand1, this.operand2, 'execute');
      this.subject.renderAnswer(this.operand1 / this.operand2);
    } catch (e) {
      this.subject.renderError(e);
    }
  }

  unDo() {
    console.log(this.operand1, this.operand2, 'undo');
    this.subject.setOperands(this.operand1, this.operand2, this.operator);
  }
}