import Command from '../Commands/XInYCommand';
import CommandsTester from './CommandsTester';

const xInYCommandTester = new CommandsTester(Command);

xInYCommandTester.fillTestValues(8, 2, '^', 64);
xInYCommandTester.fillTestValues(8, 0, '^', 1);
xInYCommandTester.fillTestValues(4.5, 2.5, '^', 42.95673695708);
xInYCommandTester.fillTestValues(0, -2, '^');

xInYCommandTester.test('try to devide by zero');