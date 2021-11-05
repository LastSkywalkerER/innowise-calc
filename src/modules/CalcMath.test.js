import {
  describe,
  test,
  expect,
  afterEach,
} from '@jest/globals';
import СalcMath from './CalcMath';
import ButtonsCommand from './Commands/ButtonsCommand';
import {
  buttonNames,
} from './buttonNames';
import Command from './Commands/Command';

describe('CalcMath:', () => {
  const input = {
    value: '',
  };
  const calcMath = new СalcMath(input);
  const buttonsCommand = new ButtonsCommand(calcMath, buttonNames);

  const userImitation = ({
    string,
    button,
  }) => {
    const Command = button.Command;
    string.split('').forEach((button) => buttonsCommand.execute(String(button)));

    const command = new Command(calcMath);
    command.execute();

    return input.value;
  };

  const reset = () => buttonsCommand.execute('AC');

  const testValues = [{
    input: {
      string: '8/2',
      button: buttonNames.eq,
    },
    output: 4,
  }, {
    input: {
      string: '8*2',
      button: buttonNames.eq,
    },
    output: 16,
  }, {
    input: {
      string: '8+2',
      button: buttonNames.eq,
    },
    output: 10,
  }, {
    input: {
      string: '8-2',
      button: buttonNames.eq,
    },
    output: 6,
  }, {
    input: {
      string: '2',
      button: buttonNames.xSquare,
    },
    output: '4',
  }, {
    input: {
      string: '2',
      button: buttonNames.xCube,
    },
    output: '8',
  }, {
    input: {
      string: '25',
      button: buttonNames.squareRoot,
    },
    output: '5',
  }, {
    input: {
      string: '125',
      button: buttonNames.cubeRoot,
    },
    output: '5',
  }, {
    input: {
      string: '5',
      button: buttonNames.ex,
    },
    output: '148.41',
  }, {
    input: {
      string: '5',
      button: buttonNames.tenInX,
    },
    output: '100000',
  }, {
    input: {
      string: '5',
      button: buttonNames.xFact,
    },
    output: '120',
  }];

  afterEach(() => {
    reset();
  });

  testValues.forEach((testValue) => test(`test ${testValue.input.string} ${testValue.input.button.name} ${testValue.output}`, () => {
    expect(userImitation(testValue.input))
      .toBe(testValue.output);
  }));
});