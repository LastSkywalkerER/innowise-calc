export default class OperandsManager {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  // eslint-disable-next-line class-methods-use-this
  checkMinus(string) {
    return (string.slice(0, 1) !== '-' ? +string : -string.slice(1, string.length));
  }

  composeOutput(value) {
    const {
      operand1,
      operand2,
      operator,
    } = this.getState();
    if (operator) {
      this.setState({
        operand2: value === '.' ? `${operand2}${value}` : this.customRound(this.checkMinus(`${operand2}${value}`)),
      });
    } else {
      this.setState({
        operand1: value === '.' || value === '-' ? `${operand1}${value}` : this.customRound(this.checkMinus(`${operand1}${value}`)),
      });
    }
  }

  getState() {
    return this.state;
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

  subscribe(listener) {
    this.listeners.push(listener);
  }

  setState(value) {
    this.state = {
      ...this.state,
      ...value,
    };
    this.listeners.forEach((listener) => listener.call(undefined, this.state));
  }
}