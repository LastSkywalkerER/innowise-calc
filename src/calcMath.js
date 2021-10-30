export default class СalcMath {
  constructor(input) {
    this.operator = '';
    this.action = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.input = input;
    this.dotFlag = false;
    this.actionFlag = false;
  }

  render(value) {
    this.input.value += value;
  }

  renderAction(value, action) {
    if (!this.actionFlag) {
      this.action = `${action}Handler`;
      this.dotFlag = false;
      this.operator = value;
      this.actionFlag = true;
      this.render(value);
    }
  }

  renderAnswer(value) {
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

  delete() {
    this.reset();
  }

  eq() {
    const {
      value,
    } = this.input;

    this.operand1 = +value.slice(0, value.indexOf(this.operator));
    this.operand2 = +value.slice(value.indexOf(this.operator) + 1);

    this[this.action]();
  }

  enter() {
    this.eq();
  }

  one(text) {
    this.render(text);
  }

  two(text) {
    this.render(text);
  }

  three(text) {
    this.render(text);
  }

  four(text) {
    this.render(text);
  }

  five(text) {
    this.render(text);
  }

  six(text) {
    this.render(text);
  }

  seven(text) {
    this.render(text);
  }

  eight(text) {
    this.render(text);
  }

  nine(text) {
    this.render(text);
  }

  zero(text) {
    this.render(text);
  }

  dot(text) {
    if (!this.dotFlag) {
      this.dotFlag = true;
      this.render(text);
    }
  }

  dev(text, action) {
    this.renderAction(text, action);
  }

  devHandler() {
    try {
      if (this.operand2 === 0) {
        throw Error('try to devide on zero');
      }
      this.renderAnswer(this.operand1 / this.operand2);
    } catch (e) {
      this.reset();
      this.render(e);
    }
  }

  mult(text, action) {
    this.renderAction(text, action);
  }

  multHandler() {
    this.renderAnswer(this.operand1 * this.operand2);
  }

  minus(text, action) {
    this.renderAction(text, action);
  }

  minusHandler() {
    this.renderAnswer(this.operand1 - this.operand2);
  }

  plus(text, action) {
    this.renderAction(text, action);
  }

  plusHandler() {
    this.renderAnswer(this.operand1 + this.operand2);
  }
}