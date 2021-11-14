import Command from './Command';

export default class DevCommand extends Command {
  execute() {
    if (this.operand2 === 0 || this.operand2 === '' || this.operand2 === '0') {
      throw Error('try to devide by zero');
    }
    return {
      operand1: this.operand1 / this.operand2,
    };
  }

  unDo() {
    return {
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
    };
  }
}