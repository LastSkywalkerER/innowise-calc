import Command from '../Commands/MinusCommand';
import CommandsTester from './CommandsTester';

const MinusCommandTester = new CommandsTester(Command);

MinusCommandTester.fillTestValues(8, 2, '-', 6);
MinusCommandTester.fillTestValues(8, 0, '-', 8);
MinusCommandTester.fillTestValues(4.5, 2.5, '-', 2);
MinusCommandTester.fillTestValues(0, 2, '-', -2);

MinusCommandTester.test();