import Command from '../Commands/SquareRootCommand';
import CommandsTester from './CommandsTester';

const squareRootCommandTester = new CommandsTester(Command);

squareRootCommandTester.fillTestValues(8, 0, '', 2.828427124746);
squareRootCommandTester.fillTestValues(-2, 0, '');
squareRootCommandTester.fillTestValues(25, 0, '', 5);
squareRootCommandTester.fillTestValues(0, 0, '', 0);

squareRootCommandTester.test('');