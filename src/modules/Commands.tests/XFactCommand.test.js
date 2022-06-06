import Command from '../Commands/XFactCommand';
import CommandsTester from './CommandsTester';

const xFactCommandTester = new CommandsTester(Command);

xFactCommandTester.fillTestValues(5, 0, '', 120);
xFactCommandTester.fillTestValues(-15, 0, '');
xFactCommandTester.fillTestValues(4.5, 0, '', 52.3427777846);
xFactCommandTester.fillTestValues(0, 0, '', 1);

xFactCommandTester.test('', -1);