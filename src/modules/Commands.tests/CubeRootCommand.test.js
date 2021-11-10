import Command from '../Commands/CubeRootCommand';
import CommandsTester from './CommandsTester';

const cubeRootCommandTester = new CommandsTester(Command);

cubeRootCommandTester.fillTestValues(8, 0, '', 2);
cubeRootCommandTester.fillTestValues(-15, 0, '');
cubeRootCommandTester.fillTestValues(4.5, 0, '', 1.650963624447);
cubeRootCommandTester.fillTestValues(0, 0, '', 0);

cubeRootCommandTester.test('');