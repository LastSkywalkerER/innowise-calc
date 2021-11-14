import {
  buttonNames,
} from './helpers/buttonNames';
import OperandsManager from './helpers/OperandsManager';
import CommandsContainer from './helpers/CommandsContainer';

const initialState = {
  operator: '',
  operand1: '',
  operand2: 0,
  errorOccured: undefined,
};

/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
export default class СalcMath {
  constructor() {
    this.operandsManager = new OperandsManager(initialState);
    this.commands = new CommandsContainer();
    this.dotFlag = false;
    this.memory = 0;
    this.CommandToExecute = null;
    this.finalOperation = false;
  }

  setMemory(button) {
    this.errorReset();
    this.submit();
    const {
      operand1,
      operand2,
      operator,
    } = this.operandsManager.getState();

    const command = new button.Command({
      operand1,
      operand2,
      operator,
      memory: this.memory,
    });
    let result = {};

    try {
      result = command.execute(operand1);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    if (result.memory || result.memory === 0) {
      this.memory = result.memory;
    }

    if (result.operand1 || result.operand1 === 0) {
      this.checkOperands({
        operand1: result.operand1,
        operand2: result.operand2,
        operator: result.operator,
      });
    }
  }

  renderError(e) {
    this.reset();
    this.operandsManager.setState({
      errorOccured: e,
    });
  }

  errorReset() {
    if (this.operandsManager.checkError()) {
      this.operandsManager.setState({
        errorOccured: false,
      });
      this.reset();
    }
  }

  renderOutput(value) {
    this.errorReset();
    this.finalOperation = false;

    const {
      operand1,
    } = this.operandsManager.getState();

    if (operand1 === Infinity) {
      this.reset();
    }
    if (value === buttonNames.dot.renderText) {
      if (!this.dotFlag) {
        this.dotFlag = true;
        this.operandsManager.composeOutput(value);
      }
    } else {
      this.operandsManager.composeOutput(value);
    }
  }

  checkOperands({
    operand1,
    operand2,
    operator,
  }) {
    const checkDot = (operand) => {
      if (!String(operand).split('').includes('.')) {
        this.dotFlag = false;
      } else {
        this.dotFlag = true;
      }
    };

    if (operator) {
      this.CommandToExecute = buttonNames.getButtonByOperator(operator).Command;
    }

    if (operand1 || operand1 === 0) {
      checkDot(operand1);
    }
    if (operand2) {
      checkDot(operand2);
    }

    this.operandsManager.setState({
      operand1: operand1 || 0,
      operand2: operand2 || 0,
      operator: operator || '',
    });
  }

  renderAction(button) {
    this.errorReset();
    this.finalOperation = false;
    const {
      operand1,
      operand2,
      operator,
    } = this.operandsManager.getState();

    const initialSequence = () => {
      if (operand1 !== '' && operand1 !== '-' && operand1 !== Infinity) {
        this.CommandToExecute = button.Command;
        this.operandsManager.setState({
          operator: button.renderText,
        });
        this.dotFlag = false;
      } else if (button.renderText === '-' && !operand1) {
        this.renderOutput(button.renderText);
      }
    };

    if (operand2 && operator) {
      this.submit();
      initialSequence();
      return;
    }

    if (!operator || (!operand2 && operator)) {
      initialSequence();
    }
  }

  reset() {
    this.operandsManager.setState(initialState);
    this.dotFlag = false;
    this.finalOperation = false;
    this.CommandToExecute = null;
  }

  unDo() {
    if (this.commands.getLastCommand()) {
      this.finalOperation = true;
      this.checkOperands(this.commands.popCommand().executedCommand.unDo());
    }
  }

  executer(Command, disableHistory) {
    const state = this.operandsManager.getState();

    const executedCommand = new Command(state);
    try {
      const output = executedCommand.execute();
      this.checkOperands(output);
      if (!disableHistory) {
        this.commands.pushCommand({
          executedCommand,
          Command,
        });
      }
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

  setLastOperands() {
    const {
      operand2,
      operator,
    } = this.commands.getLastCommand().executedCommand;
    this.operandsManager.setState({
      operand2,
      operator,
    });
    return this.commands.getLastCommand().Command;
  }

  submit(repeatable) {
    if (this.CommandToExecute) {
      const {
        operand1,
        operand2,
        operator,
      } = this.operandsManager.getState();
      if (operator && !operand2) {
        this.operandsManager.setState({
          operand2: operand1,
        });
      }
      this.executer(this.CommandToExecute);
      this.CommandToExecute = null;
    } else if (repeatable && this.commands.getLastCommand()) {
      this.executer(this.setLastOperands());
    }
  }
}