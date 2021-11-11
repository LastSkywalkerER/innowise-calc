export default class OperandsManager {
  constructor(initialState) {
    this.state = initialState;
  }

  // eslint-disable-next-line class-methods-use-this
  checkMinus(string) {
    return (string.slice(0, 1) !== '-' ? +string : -string.slice(1, string.length));
  }

  getOperands(value) {
    let operatorPosition = value.slice(0, 1) !== '-' ?
      value.indexOf(this.state.operator) :
      (value.slice(1, value.length).indexOf(this.state.operator) + 1);

    if (this.state.operator && operatorPosition > 0) {
      if (value.slice(operatorPosition + this.state.operator.length) === '') {
        this.state.operand2 = this.checkMinus(value.slice(0, operatorPosition));
      } else {
        this.state.operand2 =
          this.checkMinus(value.slice(operatorPosition + this.state.operator.length));
      }
    } else {
      operatorPosition = value.length;
    }
    this.state.operand1 = this.checkMinus(value.slice(0, operatorPosition));

    return this.state;
  }

  getDotFlag() {
    return this.state.dotFlag;
  }

  checkError() {
    return this.state.errorOccured;
  }

  // eslint-disable-next-line class-methods-use-this
  customRound(value) {
    if (String(value).indexOf('.') > 0) {
      const precisionNumber = 5;
      let numberWrongZero = 0;
      let numberWrongNine = 0;
      let lastChar = String(value).charAt(String(value).length - 1);

      // eslint-disable-next-line no-plusplus
      for (let i = String(value).length - 2; i > String(value).indexOf('.'); i--) {
        if (String(value).charAt(i) === '0' && lastChar === '0') {
          numberWrongZero += 1;
        }
        if (String(value).charAt(i) === '9' && lastChar === '9') {
          numberWrongNine += 1;
        }

        lastChar = String(value).charAt(i);
      }

      if (numberWrongZero > precisionNumber || numberWrongNine > precisionNumber) {
        return this.checkMinus(value
          .toPrecision(precisionNumber));
      }
    }
    return value;
  }

  setOperands({
    operand1,
    operand2,
    operator,
  }) {
    const checkDot = (operand) => {
      if (!String(operand).split('').includes('.')) {
        this.state.dotFlag = false;
      } else {
        this.state.dotFlag = true;
      }
    };

    let curOperand1 = '';
    let curOperand2 = '';
    let curOperator = '';

    if (operand1 || operand1 === 0) {
      checkDot(operand1);
      curOperand1 = this.customRound(operand1);
      this.state.operand1 = curOperand1;
    }
    if (operand2) {
      checkDot(operand2);
      curOperand2 = this.customRound(operand2);
      this.state.operand2 = curOperand2;
    }

    if (operator) {
      curOperator = operator;
      this.state.operator = curOperator;
      this.state.actionFlag = true;
    } else {
      this.state.actionFlag = false;
    }

    return {
      curOperand1,
      curOperand2,
      curOperator,
    };
  }

  setState(value) {
    this.state = {
      ...this.state,
      ...value,
    };
  }
}