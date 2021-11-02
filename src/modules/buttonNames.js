import EqualCommand from './Commands/EqualCommand';
import ResetCommand from './Commands/ResetCommand';
import DotCommand from './Commands/DotCommand';
import DevCommand from './Commands/DevCommand';
import MultCommand from './Commands/MultCommand';
import MinusCommand from './Commands/MinusCommand';
import PlusCommand from './Commands/PlusCommand';

const buttonNames = {
  mc: {
    name: 'mc',
    Command: null,
  },
  mPlus: {
    name: 'm+',
    Command: null,
  },
  mMinus: {
    name: 'm-',
    Command: null,
  },
  mr: {
    name: 'mr',
    Command: null,
  },
  x2: {
    name: 'x²',
    Command: null,
  },
  x3: {
    name: 'x³',
    Command: null,
  },
  xy: {
    name: 'xʸ',
    Command: null,
  },
  ex: {
    name: 'eˣ',
    Command: null,
  },
  tenInX: {
    name: '10ˣ',
    Command: null,
  },
  oneDevX: {
    name: 'm+',
    Command: null,
  },
  squareRoot: {
    name: '√',
    Command: null,
  },
  cubeRoot: {
    name: '³√',
    Command: null,
  },
  yRoot: {
    name: 'ʸ√',
    Command: null,
  },
  xFact: {
    name: 'x!',
    Command: null,
  },
  reset: {
    name: 'AC',
    Command: ResetCommand,
  },
  plusMinus: {
    name: '+/-',
    Command: null,
  },
  percent: {
    name: '%',
    Command: null,
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
};

const buttonsHard = [
  buttonNames.mc.name,
  buttonNames.mPlus.name,
  buttonNames.mMinus.name,
  buttonNames.mr.name,
  buttonNames.x2.name,
  buttonNames.x3.name,
  buttonNames.xy.name,
  buttonNames.ex.name,
  buttonNames.tenInX.name,
  buttonNames.oneDevX.name,
  buttonNames.squareRoot.name,
  buttonNames.cubeRoot.name,
  buttonNames.yRoot.name,
  buttonNames.xFact.name,
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
  buttonNames.one.name,
  buttonNames.two.name,
  buttonNames.three.name,
  buttonNames.four.name,
  buttonNames.five.name,
  buttonNames.six.name,
  buttonNames.seven.name,
  buttonNames.eight.name,
  buttonNames.nine.name,
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