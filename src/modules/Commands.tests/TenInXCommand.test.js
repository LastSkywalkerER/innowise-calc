import Command from '../Commands/TenInXCommand';
import CommandsTester from './CommandsTester';

const tenInXCommandTester = new CommandsTester(Command);

tenInXCommandTester.fillTestValues(8, 0, '', 100000000);
tenInXCommandTester.fillTestValues(-2, 0, '', 0.01);
tenInXCommandTester.fillTestValues(4.5, 0, '', 31622.77660168);
tenInXCommandTester.fillTestValues(0, 0, '', 1);

tenInXCommandTester.test('');