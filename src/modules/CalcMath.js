import {
  buttonNames,
} from './buttonNames';
import OperandsManager from './OperandsManager';

const initialState = {
  operator: '',
  operand1: 0,
  operand2: 0,
  dotFlag: false,
  actionFlag: false,
  errorOccured: false,
  memory: 0,
};

/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
export default class СalcMath {
  constructor(input) {
    this.operandsManager = new OperandsManager(initialState);
    this.commands = [];
    this.CommandToExecute = null;
    this.LastCommand = null;
    this.input = input;
    this.finalOperation = false;
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

  setMemory(button) {
    this.submit();
    const {
      operand1,
      operand2,
      operator,
      memory,
    } = this.operandsManager.getOperands(this.input.value);

    const command = new button.Command({
      operand1,
      operand2,
      operator,
      memory,
    });
    let result = {};

    try {
      result = command.execute(operand1);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    if (result.memory || result.memory === 0) {
      this.operandsManager.setState({
        memory: result.memory,
      });
    }

    if (result.operand1 || result.operand1 === 0) {
      this.renderOperands(result);
    }
  }

  renderOperands(state) {
    this.errorReset();

    const {
      curOperand1,
      curOperand2,
      curOperator,
    } = this.operandsManager.setOperands(state);

    if (state.operator) {
      this.CommandToExecute = this.getCommandByOperator(state.operator);
    }

    this.input.value = `${curOperand1}${curOperator}${curOperand2}`;
  }

  renderError(e) {
    this.operandsManager.setState({
      errorOccured: true,
    });
    this.reset();
    this.input.value = e;
  }

  errorReset() {
    if (this.operandsManager.checkError()) {
      this.OperandsManager.setState({
        errorOccured: false,
      });
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
      if (!this.operandsManager.getDotFlag()) {
        this.operandsManager.setState({
          dotFlag: true,
        });
        this.input.value += value;
      }
    } else {
      this.input.value += value;
    }
  }

  renderAction(button) {
    this.errorReset();
    const {
      operand1,
      operator,
      actionFlag,
    } = this.operandsManager.getOperands(this.input.value);

    const initialSequence = () => {
      if (this.input.value !== '' && this.input.value !== '-' && this.input.value !== 'Infinity') {
        this.CommandToExecute = button.Command;
        this.operandsManager.setState({
          operator: button.renderText,
          actionFlag: true,
          dotFlag: false,
        });
        this.render(button.renderText);
      } else if (button.renderText === '-' && this.input.value === '') {
        this.render(button.renderText);
      }
    };

    if (this.input.value.indexOf(operator) === (this.input.value.length - 1) &&
      actionFlag) {
      this.input.value = operand1;
      initialSequence();
      return;
    }

    if (actionFlag) {
      this.submit();
      initialSequence();
      return;
    }

    if (!actionFlag) {
      initialSequence();
    }
  }

  reset() {
    this.operandsManager.setState({
      operator: '',
      operand1: 0,
      operand2: 0,
      dotFlag: false,
      actionFlag: false,
      errorOccured: false,
    });
    this.finalOperation = false;
    this.input.value = '';
    this.LastCommand = null;
    this.CommandToExecute = null;
  }

  unDo() {
    if (this.commands.length) {
      this.finalOperation = true;
      this.renderOperands(this.commands.pop().unDo());
    }
  }

  executer(Command, disableHistory) {
    const state = this.operandsManager.getOperands(this.input.value, disableHistory);

    const command = new Command(state);
    try {
      this.renderOperands(command.execute());
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
    if (this.CommandToExecute) {
      this.executer(this.CommandToExecute);
      this.CommandToExecute = null;
    } else if (repeatable && this.LastCommand) {
      this.executer(this.LastCommand);
    }
  }
}