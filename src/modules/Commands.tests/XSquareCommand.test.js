import Command from '../Commands/XSquareCommand';
import CommandsTester from './CommandsTester';

const xSquareCommandTester = new CommandsTester(Command);

xSquareCommandTester.fillTestValues(8, 0, '', 64);
xSquareCommandTester.fillTestValues(-15, 0, '', 225);
xSquareCommandTester.fillTestValues(4.5, 0, '', 20.25);
xSquareCommandTester.fillTestValues(0, 0, '', 0);

xSquareCommandTester.test('');