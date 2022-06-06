import Command from '../Commands/MultCommand';
import CommandsTester from './CommandsTester';

const multCommandTester = new CommandsTester(Command);

multCommandTester.fillTestValues(8, 2, '*', 16);
multCommandTester.fillTestValues(8, 0, '*', 0);
multCommandTester.fillTestValues(4.5, 2.5, '*', 11.25);
multCommandTester.fillTestValues(0, 2, '*', 0);

multCommandTester.test();