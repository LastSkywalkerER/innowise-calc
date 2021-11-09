import {
  buttonNames,
} from './buttonNames';
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
export default class СalcMath {
  constructor(input) {
    this.operator = '';
    this.commands = [];
    this.CommandToExecute = null;
    this.LastCommand = null;
    this.lastExecutedCommand = null;
    this.UsedCommands = new Map();
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
  getCommandByOperator(operator) {
    return buttonNames[Object.keys(buttonNames).reduce((prev, curr) => {
      if (buttonNames[curr].renderText === operator) {
        return curr;
      }
      return prev;
    })].Command;
  }

  // eslint-disable-next-line class-methods-use-this
  checkMinus(string) {
    return (string.slice(0, 1) !== '-' ? +string : -string.slice(1, string.length));
  }

  getOperands() {
    const value = String(this.input.value);
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

  setOperands({
    operand1,
    operand2,
    operator,
  }) {
    this.errorReset();

    const checkDot = (operand) => {
      if (!String(operand).split('').includes('.')) {
        this.dotFlag = false;
      } else {
        this.dotFlag = true;
      }
    };

    let curOperand1 = '';
    let curOperand2 = '';
    let curOperator = '';

    if (operand1) {
      checkDot(operand1);
      curOperand1 = this.customRound(operand1);
      this.operand1 = curOperand1;
    }
    if (operand2) {
      checkDot(operand2);
      curOperand2 = this.customRound(operand2);
      this.operand2 = curOperand2;
    }

    if (operator) {
      curOperator = operator;
      this.operator = curOperator;
      this.actionFlag = true;
      this.CommandToExecute = this.getCommandByOperator(operator);
    } else {
      this.actionFlag = false;
    }

    this.input.value = `${curOperand1}${curOperator}${curOperand2}`;
  }

  setMemory(button) {
    this.submit();
    this.getOperands();

    const command = new button.Command({
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
      memory: this.memory,
    });
    const result = command.execute(this.operand1);

    this.memory = result.memory;
    this.setOperands(result);
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
    if (value === buttonNames.dot.renderText) {
      if (!this.dotFlag) {
        this.dotFlag = true;
        this.input.value += value;
      }
    } else {
      this.input.value += value;
    }
  }

  renderAction(button) {
    this.errorReset();

    const initialSequence = () => {
      if (this.input.value !== '' && this.input.value !== '-' && this.input.value !== 'Infinity') {
        this.dotFlag = false;
        this.CommandToExecute = button.Command;
        // this.UsedCommands.set(button.renderText, button.Command);
        this.operator = button.renderText;
        this.actionFlag = true;
        this.render(button.renderText);
      } else if (button.renderText === '-' && this.input.value === '') {
        this.render(button.renderText);
      }
    };

    if (this.input.value.indexOf(this.operator) === (this.input.value.length - 1) &&
      this.actionFlag) {
      // добавляет минус у второго операнда после оператора О_о
      // if (!this.minusBeforeOperand2 && value === '-') {
      //   this.minusBeforeOperand2 = true;
      //   this.render(value);
      //   return;
      // }
      this.minusBeforeOperand2 = false;
      this.getOperands();
      this.input.value = this.operand1;
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
      const precisionNumber = 5;
      let numberWrongZero = 0;
      let numberWrongNine = 0;
      let lastChar = String(value).charAt(String(value).length - 1);

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

  reset() {
    this.operator = '';
    this.operand1 = 0;
    this.operand2 = 0;
    this.dotFlag = false;
    this.minusBeforeOperand2 = false;
    this.actionFlag = false;
    this.finalOperation = false;
    this.input.value = '';
    this.LastCommand = null;
    this.CommandToExecute = null;
  }

  unDo() {
    if (this.commands.length) {
      this.finalOperation = true;
      this.lastExecutedCommand = this.commands.pop();
      this.setOperands(this.lastExecutedCommand.unDo());
    }
  }

  executer(Command) {
    this.getOperands();

    const command = new Command({
      operand1: this.operand1,
      operand2: this.operand2,
      operator: this.operator,
    });
    try {
      this.setOperands(command.execute());
      this.commands.push(command);
      this.LastCommand = Command;
    } catch (e) {
      if (e.name === 'Error') {
        this.renderError(e);
        // console.error(e);
      } else {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    }
  }

  submit(repeatable) {
    // this.getOperands();
    if (this.CommandToExecute) {
      this.executer(this.CommandToExecute);
      this.CommandToExecute = null;
    } else if (repeatable && this.LastCommand) {
      this.executer(this.LastCommand);
    }
  }
}