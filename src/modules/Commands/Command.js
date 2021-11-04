export default class Command {
  constructor(subject) {
    this.subject = subject;

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