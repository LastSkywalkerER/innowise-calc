export default class Command {
  constructor({
    operand1,
    operand2,
    operator,
    memory,
  }) {
    this.operand1 = operand1;
    this.operand2 = operand2;
    this.operator = operator;
    this.memory = memory;

    if (this.constructor.name === 'Command') {
      throw new Error(`${this.constructor.name}: can not create instance of interface`);
    }
  }

  execute() {
    throw new Error(`Method execute() not implemented in ${this.constructor.name}`);
  }

  unDo() {
    throw new Error(`Method undo() not implemented in ${this.constructor.name}`);
  }
}