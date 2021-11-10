import Command from '../Commands/DevCommand';
import CommandsTester from './CommandsTester';

const devCommandTester = new CommandsTester(Command);

devCommandTester.fillTestValues(8, 2, '/', 4);
devCommandTester.fillTestValues(8, 0, '/');
devCommandTester.fillTestValues(4.5, 2.5, '/', 1.8);
devCommandTester.fillTestValues(0, 2, '/', 0);

devCommandTester.test('try to devide by zero');