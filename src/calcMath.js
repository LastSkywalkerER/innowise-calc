export default class СalcMath {
  constructor() {
    this.action = "";
    this.operand1 = 0;
    this.operand2 = 0;
  }

  commandDev(a, b) {
    this.operand1 = a / b;
    return this.operand1;
  }

  commandMult(a, b) {
    this.operand1 = a * b;
    return this.operand1;
  }

  commandMinus(a, b) {
    this.operand1 = a - b;
    return this.operand1;
  }

  commandPlus(a, b) {
    this.operand1 = a + b;
    return this.operand1;
  }
}
