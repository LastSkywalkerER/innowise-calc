import Command from '../Commands/XCubeCommand';
import CommandsTester from './CommandsTester';

const xCubeCommandTester = new CommandsTester(Command);

xCubeCommandTester.fillTestValues(8, 0, '', 512);
xCubeCommandTester.fillTestValues(-5, 0, '', -125);
xCubeCommandTester.fillTestValues(4.5, 0, '', 91.125);
xCubeCommandTester.fillTestValues(0, 0, '', 0);

xCubeCommandTester.test('');