import Command from '../Commands/EInxCommand';
import CommandsTester from './CommandsTester';

const eInxCommandTester = new CommandsTester(Command);

eInxCommandTester.fillTestValues(8, 0, '', 2980.95798705);
eInxCommandTester.fillTestValues(-15, 0, '', 3.059023205002E-7);
eInxCommandTester.fillTestValues(4.5, 0, '', 90.01713130066);
eInxCommandTester.fillTestValues(0, 0, '', 1);

eInxCommandTester.test('');