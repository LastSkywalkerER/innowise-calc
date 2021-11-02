import {
  describe,
  test,
  expect,
  afterEach,
} from '@jest/globals';
import СalcMath from './CalcMath';
import Command from './Commands/ButtonsCommand';
import {
  buttonNames,
} from './buttonNames';

describe('CalcMath:', () => {
  const input = {
    value: '',
  };
  const command = new Command(new СalcMath(input), buttonNames);

  const userImitation = ({
    string,
    pressEqual,
  }) => {
    string.split('').forEach((button) => command.execute(button));

    if (pressEqual) {
      command.execute('=');
    }
    return input.value;
  };

  const reset = () => command.execute('AC');

  const testValues = [{
    input: {
      string: '8/2',
      pressEqual: true,
    },
    output: 4,
  }, {
    input: {
      string: '8*2',
      pressEqual: true,
    },
    output: 16,
  }, {
    input: {
      string: '8+2',
      pressEqual: true,
    },
    output: 10,
  }, {
    input: {
      string: '8-2',
      pressEqual: true,
    },
    output: 6,
  }];

  afterEach(() => {
    reset();
  });

  testValues.forEach((testValue) => test(`test ${testValue.input.string} = ${testValue.output}`, () => {
    expect(userImitation(testValue.input))
      .toBe(testValue.output);
  }));
});