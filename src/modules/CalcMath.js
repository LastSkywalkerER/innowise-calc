/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
export default class СalcMath {
  constructor(input) {
    this.operator = '';
    this.commands = [];
    this.lastCommand = null;
    this.operand1 = 0;
    this.operand2 = 0;
    this.input = input;
    this.dotFlag = false;
    this.actionFlag = false;
    this.minusBeforeOperand2 = false;
    this.errorOccured = false;
    this.finalOperation = false;
    this.memory = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  checkMinus(string) {
    return (string.slice(0, 1) !== '-' ? +string : -string.slice(1, string.length));
  }

  getOperands() {
    const value = this.input.value;
    let operatorPosition = value.slice(0, 1) !== '-' ?
      value.indexOf(this.operator) :
      (value.slice(1, value.length).indexOf(this.operator) + 1);

    if (this.operator && operatorPosition > 0) {
      this.operand2 = this.checkMinus(value.slice(operatorPosition + this.operator.length));
    } else {
      operatorPosition = value.length;
    }
    this.operand1 = this.checkMinus(value.slice(0, operatorPosition));
  }

  setOperands(setValue1 = '', setValue2 = '', operator = this.operator) {
    if (!Number.isNaN(setValue1)) {
      this.operand1 = setValue1;
    }
    if (!Number.isNaN(setValue2)) {
      this.operand2 = setValue2;
    }

    this.input.value = `${this.operand1}${operator}${this.operand2}`;
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
    this.finalOperation = false;
    if (this.input.value === 'Infinity') {
      this.reset();
    }
    this.input.value += value;
  }

  renderAction(value, Command) {
    this.errorReset();

    const initialSequence = () => {
      if (this.input.value !== '' && this.input.value !== '-' && this.input.value !== 'Infinity') {
        this.dotFlag = false;
        this.commands.push(new Command(this));
        this.lastCommand = new Command(this);
        this.operator = value;
        this.actionFlag = true;
        this.render(value);
      } else if (value === '-' && this.input.value === '') {
        this.render(value);
      }
    };

    if (this.input.value.indexOf(this.operator) === (this.input.value.length - 1) &&
      this.actionFlag) {
      if (!this.minusBeforeOperand2 && value === '-') {
        this.minusBeforeOperand2 = true;
        this.render(value);
        return;
      }
      this.minusBeforeOperand2 = false;
      this.getOperands();
      this.input.value = this.operand1;
      this.commands.pop();
      initialSequence();
      return;
    }

    if (this.actionFlag) {
      this.submit();
      initialSequence();
      return;
    }

    if (!this.actionFlag) {
      initialSequence();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  customRound(value) {
    if (String(value).indexOf('.') > 0) {
      return this.checkMinus(value
        .toPrecision(5));
    }
    return value;
  }

  renderAnswer(value) {
    this.errorReset();
    const roundedValue = this.customRound(value);

    this.operator = '';
    this.operand1 = roundedValue;
    if (!String(this.operand1).split('').includes('.')) {
      this.dotFlag = false;
    } else {
      this.dotFlag = true;
    }
    this.actionFlag = false;
    this.input.value = roundedValue;
  }

  reset() {
    this.operator = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.dotFlag = false;
    this.minusBeforeOperand2 = false;
    this.actionFlag = false;
    this.finalOperation = false;
    this.input.value = '';
    this.lastCommand = null;
  }

  unDo() {
    this.reset();
    if (this.commands.length) {
      this.commands.pop().unDo();
    }
  }

  submit() {
    this.getOperands();

    if (this.finalOperation && this.lastCommand) {
      this.lastCommand.execute({
        operand1: this.operand1,
        operand2: this.operand2,
        operator: this.operator,
      });
    }

    if (this.operator) {
      this.commands[this.commands.length - 1].execute({
        operand1: this.operand1,
        operand2: this.operand2,
        operator: this.operator,
      });
    }
  }
}