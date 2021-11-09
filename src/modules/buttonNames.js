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

const buttonNames = {
  mc: {
    name: 'mc',
    buttonText: 'mc',
    Command: MCCommand,
  },
  mPlus: {
    name: 'mPlus',
    buttonText: 'm+',
    Command: MPlusCommand,
  },
  mMinus: {
    name: 'mMinus',
    buttonText: 'm-',
    Command: MMinusCommand,
  },
  mr: {
    name: 'mr',
    buttonText: 'mr',
    Command: MRCommand,
  },
  xSquare: {
    name: 'xSquare',
    buttonText: 'x²',
    renderText: '²',
    Command: XSquareCommand,
  },
  xCube: {
    name: 'xCube',
    buttonText: 'x³',
    renderText: '³',
    Command: XCubeCommand,
  },
  xy: {
    name: 'xy',
    buttonText: 'xʸ',
    renderText: '^',
    Command: XInYCommand,
  },
  ex: {
    name: 'ex',
    buttonText: 'eˣ',
    renderText: '2.71828182846^',
    Command: EInxCommand,
  },
  tenInX: {
    name: 'tenInX',
    buttonText: '10ˣ',
    renderText: '10^',
    Command: TenInXCommand,
  },
  oneDevX: {
    name: 'oneDevX',
    buttonText: '1/x',
    renderText: '1/',
    Command: OneDevXCommand,
  },
  squareRoot: {
    name: 'squareRoot',
    buttonText: '²√',
    renderText: '²√',
    Command: SquareRootCommand,
  },
  cubeRoot: {
    name: 'cubeRoot',
    buttonText: '³√',
    renderText: '³√',
    Command: CubeRootCommand,
  },
  yRoot: {
    name: 'yRoot',
    buttonText: 'ʸ√',
    renderText: '√',
    Command: YRootCommand,
  },
  xFact: {
    name: 'xFact',
    buttonText: 'x!',
    renderText: '!',
    Command: XFactCommand,
  },
  reset: {
    name: 'reset',
    buttonText: 'AC',
    Command: null,
  },
  plusMinus: {
    name: 'plusMinus',
    buttonText: '+/-',
    renderText: '-',
    Command: PlusMinusCommand,
  },
  percent: {
    name: 'percent',
    buttonText: '%',
    renderText: '%',
    Command: PercentCommand,
  },
  dev: {
    name: 'dev',
    buttonText: '/',
    renderText: '/',
    Command: DevCommand,
  },
  mult: {
    name: 'mult',
    buttonText: '*',
    renderText: '*',
    Command: MultCommand,
  },
  minus: {
    name: 'minus',
    buttonText: '-',
    renderText: '-',
    Command: MinusCommand,
  },
  plus: {
    name: 'plus',
    buttonText: '+',
    renderText: '+',
    Command: PlusCommand,
  },
  eq: {
    name: 'eq',
    buttonText: '=',
    renderText: '=',
    Command: null,
  },
  one: {
    name: 'one',
    buttonText: '1',
    renderText: '1',
    Command: null,
  },
  two: {
    name: 'two',
    buttonText: '2',
    renderText: '2',
    Command: null,
  },
  three: {
    name: 'three',
    buttonText: '3',
    renderText: '3',
    Command: null,
  },
  four: {
    name: 'four',
    buttonText: '4',
    renderText: '4',
    Command: null,
  },
  five: {
    name: 'five',
    buttonText: '5',
    renderText: '5',
    Command: null,
  },
  six: {
    name: 'six',
    buttonText: '6',
    renderText: '6',
    Command: null,
  },
  seven: {
    name: 'seven',
    buttonText: '7',
    renderText: '7',
    Command: null,
  },
  eight: {
    name: 'eight',
    buttonText: '8',
    renderText: '8',
    Command: null,
  },
  nine: {
    name: 'nine',
    buttonText: '9',
    renderText: '9',
    Command: null,
  },
  zero: {
    name: 'zero',
    buttonText: '0',
    renderText: '0',
    Command: null,
  },
  dot: {
    name: 'dot',
    buttonText: '.',
    renderText: '.',
    Command: null,
  },
  unDo: {
    name: 'unDo',
    buttonText: 'bck',
    Command: null,
  },
};

const buttonsHard = [
  buttonNames.mc,
  buttonNames.mPlus,
  buttonNames.mMinus,
  buttonNames.mr,
  buttonNames.xSquare,
  buttonNames.xCube,
  buttonNames.xy,
  buttonNames.ex,
  buttonNames.tenInX,
  buttonNames.oneDevX,
  buttonNames.squareRoot,
  buttonNames.cubeRoot,
  buttonNames.yRoot,
  buttonNames.xFact,
  buttonNames.unDo,
];
const buttonsSimpleUp = [
  buttonNames.reset,
  buttonNames.plusMinus,
  buttonNames.percent,
];
const buttonsSimpleRight = [
  buttonNames.dev,
  buttonNames.mult,
  buttonNames.minus,
  buttonNames.plus,
  buttonNames.eq,
];
const buttonsNumbers = [
  buttonNames.seven,
  buttonNames.eight,
  buttonNames.nine,
  buttonNames.four,
  buttonNames.five,
  buttonNames.six,
  buttonNames.one,
  buttonNames.two,
  buttonNames.three,
  buttonNames.zero,
  buttonNames.dot,
];

const resetableButtons = [
  buttonNames.eq,
  buttonNames.xSquare,
  buttonNames.xCube,
  buttonNames.ex,
  buttonNames.tenInX,
  buttonNames.oneDevX,
  buttonNames.percent,
  buttonNames.squareRoot,
  buttonNames.cubeRoot,
  buttonNames.xFact,
  buttonNames.mMinus,
  buttonNames.mPlus,
  buttonNames.unDo,
];

const memoryButtons = [
  buttonNames.mc,
  buttonNames.mPlus,
  buttonNames.mMinus,
  buttonNames.mr,
];

const answerWithOneOperand = [
  buttonNames.xSquare,
  buttonNames.xCube,
  buttonNames.ex,
  buttonNames.tenInX,
  buttonNames.squareRoot,
  buttonNames.cubeRoot,
  buttonNames.xFact,
];

const answerWithTwoOperands = [
  buttonNames.dev,
  buttonNames.mult,
  buttonNames.minus,
  buttonNames.plus,
  buttonNames.xy,
  buttonNames.yRoot,
];

const changeOneOperand = [
  buttonNames.oneDevX,
  buttonNames.plusMinus,
  buttonNames.percent,
];

export {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  resetableButtons,
  memoryButtons,
  answerWithOneOperand,
  answerWithTwoOperands,
  changeOneOperand,
  buttonNames,
};