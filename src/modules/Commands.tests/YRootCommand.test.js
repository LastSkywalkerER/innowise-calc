import Command from '../Commands/YRootCommand';
import CommandsTester from './CommandsTester';

const YRootCommandTester = new CommandsTester(Command);

YRootCommandTester.fillTestValues(8, 2, '√', 1.090507732665);
YRootCommandTester.fillTestValues(8, 0, '√', 0);
YRootCommandTester.fillTestValues(3, 8, '√', 2);
YRootCommandTester.fillTestValues(0, -2, '√');

YRootCommandTester.test('');