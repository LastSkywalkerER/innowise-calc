/* eslint-disable prefer-destructuring */
export default class СalcMath {
  constructor(input) {
    this.operator = '';
    this.commands = [];
    this.operand1 = 0;
    this.operand2 = 0;
    this.input = input;
    this.dotFlag = false;
    this.actionFlag = false;
    this.errorOccured = false;
    this.memory = 0;
  }

  getOperands() {
    const value = this.input.value;
    const checkMinus = (string) => (string.slice(0, 1) !== '-' ? +string : -string.slice(1, string.length));
    let operatorPosition = value.indexOf(this.operator);

    if (this.operator && operatorPosition > 0) {
      this.operand2 = checkMinus(value.slice(value.indexOf(this.operator) + this.operator.length));
    } else {
      operatorPosition = value.length;
    }
    this.operand1 = checkMinus(value.slice(0, operatorPosition));
  }

  setOperands(setValue1 = '', setValue2 = '') {
    if (!Number.isNaN(setValue1)) {
      this.operand1 = setValue1;
    }
    if (!Number.isNaN(setValue2)) {
      this.operand2 = setValue2;
    }

    this.input.value = `${this.operand1}${this.operator}${this.operand2}`;
  }

  setMemory(value) {
    this.memory += value;
  }

  renderError(e) {
    this.errorOccured = true;
    this.reset();
    this.input.value = e;
  }

  errorReset() {
    if (this.errorOccured) {
      this.errorOccured = false;
      this.reset();
    }
  }

  render(value) {
    this.errorReset();
    this.input.value += value;
  }

  renderAction(value, Command) {
    this.errorReset();

    const initialSequence = () => {
      if (this.input.value !== '') {
        this.dotFlag = false;
        this.commands.push(new Command(this));
        this.operator = value;
        this.actionFlag = true;
      }
      this.render(value);
    };

    if (this.actionFlag) {
      this.submit();
      initialSequence();
    }
    if (!this.actionFlag) {
      initialSequence();
    }
  }

  renderAnswer(value) {
    this.errorReset();
    this.operator = '';
    this.operand1 = value;
    this.operand2 = 0;
    if (!String(this.operand1).split('').includes('.')) {
      this.dotFlag = false;
    } else {
      this.dotFlag = true;
    }
    this.actionFlag = false;
    this.input.value = value;
  }

  reset() {
    this.operator = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.dotFlag = false;
    this.actionFlag = false;
    this.input.value = '';
    this.memory = 0;
  }

  submit() {
    this.errorReset();
    this.getOperands();
    if (this.operator) {
      this.commands[this.commands.length - 1].execute();
    }
  }

  toggleMinus() {
    this.input.value = (this.input.value.slice(0, 1) !== '-' ? `-${this.input.value}` : this.input.value.slice(1, this.input.value.length));
  }
}