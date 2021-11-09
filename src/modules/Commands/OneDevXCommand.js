import Command from './Command';

export default class OneDevXCommand extends Command {
  execute() {
    if (this.operand2) {
      if (this.operand2 === 0) {
        throw Error('try to devide by zero');
      }
      return {
        operand1: this.operand1,
        operand2: 1 / this.operand2,
        operator: this.operator,
      };
    }
    if (this.operand1 === 0) {
      throw Error('try to devide by zero');
    }
    return {
      operand1: 1 / this.operand1,
    };
  }
}