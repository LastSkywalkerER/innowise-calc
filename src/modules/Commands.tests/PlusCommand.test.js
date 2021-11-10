import Command from '../Commands/PlusCommand';
import CommandsTester from './CommandsTester';

const plusCommandTester = new CommandsTester(Command);

plusCommandTester.fillTestValues(8, 2, '+', 10);
plusCommandTester.fillTestValues(8, 0, '+', 8);
plusCommandTester.fillTestValues(4.5, 2.5, '+', 7);
plusCommandTester.fillTestValues(0, -2, '+', -2);

plusCommandTester.test();