export default class СalcMath {
  constructor(input) {
    this.operator = '';
    this.command = null;
    this.operand1 = 0;
    this.operand2 = 0;
    this.input = input;
    this.dotFlag = false;
    this.actionFlag = false;
    this.errorOccured = false;
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
    if (!this.actionFlag) {
      this.dotFlag = false;
      this.command = new Command(this);
      this.operator = value;
      this.actionFlag = true;
      this.render(value);
    }
  }

  renderAnswer(value) {
    this.errorReset();
    this.reset();
    this.operand1 = value;
    this.input.value = value;
  }

  reset() {
    this.operator = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.dotFlag = false;
    this.actionFlag = false;
    this.input.value = '';
  }

  submit() {
    this.errorReset();
    // eslint-disable-next-line prefer-destructuring
    const value = this.input.value;

    if (!this.operand1) {
      this.operand1 = +value.slice(0, value.indexOf(this.operator));
    }
    if (!this.operand2) {
      this.operand2 = +value.slice(value.indexOf(this.operator) + this.operator.length);
    }

    this.command.execute();
  }
}