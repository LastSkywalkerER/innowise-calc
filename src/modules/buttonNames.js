import EqualCommand from './Commands/EqualCommand';
import ResetCommand from './Commands/ResetCommand';
import DotCommand from './Commands/DotCommand';
import DevCommand from './Commands/DevCommand';
import MultCommand from './Commands/MultCommand';
import MinusCommand from './Commands/MinusCommand';
import PlusCommand from './Commands/PlusCommand';
import PlusMinusCommand from './Commands/PlusMinusCommand';
import PercentCommand from './Commands/PercentCommand';
import XSquareCommand from './Commands/XSquareCommand';
import XCubeCommand from './Commands/XCubeCommand';
import XInYCommand from './Commands/XInYCommand';
import EInxCommand from './Commands/EInxCommand';
import TenInXCommand from './Commands/TenInXCommand';
import OneDevXCommand from './Commands/OneDevXCommand';
import SquareRootCommand from './Commands/SquareRootCommand';
import CubeRootCommand from './Commands/CubeRootCommand';
import YRootCommand from './Commands/YRootCommand';
import XFactCommand from './Commands/XFactCommand';
import MCCommand from './Commands/MCCommand';
import MMinusCommand from './Commands/MMinusCommand';
import MPlusCommand from './Commands/MPlusCommand';
import MRCommand from './Commands/MRCommand';
import UnDoCommnd from './Commands/UnDoCommnd';

const buttonNames = {
  mc: {
    name: 'mc',
    Command: MCCommand,
  },
  mPlus: {
    name: 'm+',
    Command: MPlusCommand,
  },
  mMinus: {
    name: 'm-',
    Command: MMinusCommand,
  },
  mr: {
    name: 'mr',
    Command: MRCommand,
  },
  xSquare: {
    name: 'x²',
    Command: XSquareCommand,
  },
  xCube: {
    name: 'x³',
    Command: XCubeCommand,
  },
  xy: {
    name: 'xʸ',
    Command: XInYCommand,
  },
  ex: {
    name: 'eˣ',
    Command: EInxCommand,
  },
  tenInX: {
    name: '10ˣ',
    Command: TenInXCommand,
  },
  oneDevX: {
    name: '1/x',
    Command: OneDevXCommand,
  },
  squareRoot: {
    name: '√',
    Command: SquareRootCommand,
  },
  cubeRoot: {
    name: '³√',
    Command: CubeRootCommand,
  },
  yRoot: {
    name: 'ʸ√',
    Command: YRootCommand,
  },
  xFact: {
    name: 'x!',
    Command: XFactCommand,
  },
  reset: {
    name: 'AC',
    Command: ResetCommand,
  },
  plusMinus: {
    name: '+/-',
    Command: PlusMinusCommand,
  },
  percent: {
    name: '%',
    Command: PercentCommand,
  },
  dev: {
    name: '/',
    Command: DevCommand,
  },
  mult: {
    name: '*',
    Command: MultCommand,
  },
  minus: {
    name: '-',
    Command: MinusCommand,
  },
  plus: {
    name: '+',
    Command: PlusCommand,
  },
  eq: {
    name: '=',
    Command: EqualCommand,
  },
  one: {
    name: '1',
    Command: null,
  },
  two: {
    name: '2',
    Command: null,
  },
  three: {
    name: '3',
    Command: null,
  },
  four: {
    name: '4',
    Command: null,
  },
  five: {
    name: '5',
    Command: null,
  },
  six: {
    name: '6',
    Command: null,
  },
  seven: {
    name: '7',
    Command: null,
  },
  eight: {
    name: '8',
    Command: null,
  },
  nine: {
    name: '9',
    Command: null,
  },
  zero: {
    name: '0',
    Command: null,
  },
  dot: {
    name: '.',
    Command: DotCommand,
  },
  unDo: {
    name: 'bck',
    Command: UnDoCommnd,
  },
};

const buttonsHard = [
  buttonNames.mc.name,
  buttonNames.mPlus.name,
  buttonNames.mMinus.name,
  buttonNames.mr.name,
  buttonNames.xSquare.name,
  buttonNames.xCube.name,
  buttonNames.xy.name,
  buttonNames.ex.name,
  buttonNames.tenInX.name,
  buttonNames.oneDevX.name,
  buttonNames.squareRoot.name,
  buttonNames.cubeRoot.name,
  buttonNames.yRoot.name,
  buttonNames.xFact.name,
  buttonNames.unDo.name,
];
const buttonsSimpleUp = [
  buttonNames.reset.name,
  buttonNames.plusMinus.name,
  buttonNames.percent.name,
];
const buttonsSimpleRight = [
  buttonNames.dev.name,
  buttonNames.mult.name,
  buttonNames.minus.name,
  buttonNames.plus.name,
  buttonNames.eq.name,
];
const buttonsNumbers = [
  buttonNames.seven.name,
  buttonNames.eight.name,
  buttonNames.nine.name,
  buttonNames.four.name,
  buttonNames.five.name,
  buttonNames.six.name,
  buttonNames.one.name,
  buttonNames.two.name,
  buttonNames.three.name,
  buttonNames.zero.name,
  buttonNames.dot.name,
];

export {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames,
};