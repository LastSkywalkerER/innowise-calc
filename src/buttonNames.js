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
  dot: '.',
};


const buttonsHard = [buttonNames.mc, buttonNames.mPlus, buttonNames.mMinus, buttonNames.mr, buttonNames.x2, buttonNames.x3, buttonNames.xy, buttonNames.ex, buttonNames.tenInX, buttonNames.oneDevX, buttonNames.twoInX, buttonNames.threeInX, buttonNames.yInX, buttonNames.xFact],
  buttonsSimpleUp = [buttonNames.reset, buttonNames.plusMinus, buttonNames.percent],
  buttonsSimpleRight = [buttonNames.dev, buttonNames.mult, buttonNames.minus, buttonNames.plus, buttonNames.eq],
  buttonsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', buttonNames.dot];

export {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames
}