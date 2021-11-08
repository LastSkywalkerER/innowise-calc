import Command from './Command';

export default class YRootCommand extends Command {
  execute() {
    if (this.operand1 === 0) {
      throw Error('try to devide by zero');
    }
    if (this.operand2 <= 0) {
      throw Error('invalid operand under the root');
    }
    return this.operand2 ** (1 / this.operand1);
  }

  unDo() {
    return {
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
    };
  }
}