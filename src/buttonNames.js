const buttonNames = {
  mc: 'mc',
  mPlus: 'm+',
  mMinus: 'm-',
  mr: 'm-',
  x2: 'x2',
  x3: 'x3',
  xy: 'xy',
  ex: 'ex',
  tenInX: '10x',
  oneDevX: '1/x',
  twoInX: '2x',
  threeInX: '3x',
  yInX: 'yx',
  xFact: 'x!',
  reset: 'AC',
  plusMinus: '+/-',
  percent: '%',
  dev: '/',
  mult: '*',
  minus: '-',
  plus: '+',
  eq: '=',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
  dot: '.',
};

const buttonsHard = [
  buttonNames.mc,
  buttonNames.mPlus,
  buttonNames.mMinus,
  buttonNames.mr,
  buttonNames.x2,
  buttonNames.x3,
  buttonNames.xy,
  buttonNames.ex,
  buttonNames.tenInX,
  buttonNames.oneDevX,
  buttonNames.twoInX,
  buttonNames.threeInX,
  buttonNames.yInX,
  buttonNames.xFact,
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
  buttonNames.one,
  buttonNames.two,
  buttonNames.three,
  buttonNames.four,
  buttonNames.five,
  buttonNames.six,
  buttonNames.seven,
  buttonNames.eight,
  buttonNames.nine,
  buttonNames.zero,
  buttonNames.dot,
];

export {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames,
};