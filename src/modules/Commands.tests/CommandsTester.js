import {
  describe,
  test,
  expect,
} from '@jest/globals';

export default class CommandsTester {
  constructor(Command) {
    this.Command = Command;
    this.testValues = [];
  }

  fillTestValues(
    INoperand1,
    INoperand2,
    INoperator,
    OUToperand1,
    OUToperand2,
    OUToperator,
  ) {
    this.testValues.push({
      input: {
        operand1: INoperand1,
        operand2: INoperand2,
        operator: INoperator,
      },
      output: {
        operand1: OUToperand1,
        operand2: OUToperand2,
        operator: OUToperator,
      },
    });
  }

  commandWrapper(input) {
    const command = new this.Command(input);
    return command.execute();
  }

  test(errorText, precision = 5) {
    describe('CalcMath:', () => {
      this.testValues.forEach((testValue) => test(`test ${testValue.input.operand1} ${testValue.input.operator} ${testValue.input.operand2} = ${testValue.output.operand1}`, () => {
        if (String(testValue.output.operand1).includes('.')) {
          expect(this.commandWrapper(testValue.input).operand1)
            .toBeCloseTo(testValue.output.operand1, precision);
          expect(this.commandWrapper(testValue.input).operand2)
            .toEqual(testValue.output.operand2);
        } else
        if (testValue.output.operand1 || testValue.output.operand1 === 0) {
          expect(this.commandWrapper(testValue.input))
            .toEqual(testValue.output);
        } else {
          expect(() => this.commandWrapper(testValue.input))
            .toThrowError(errorText);
        }
      }));
    });
  }
}