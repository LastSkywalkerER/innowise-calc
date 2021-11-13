/* eslint-disable no-unused-vars */
export default class CalculatorDrawer {
  constructor(rootElement) {
    this.rootElement = rootElement;
    if (this.constructor.name === 'Command') {
      throw new Error(`${this.constructor.name}: can not create instance of interface`);
    }
  }

  appendButtons(buttons, place) {
    throw new Error(`Method appendButtons(buttons, place) not implemented in ${this.constructor.name}`);
  }

  renderLayout() {
    throw new Error(`Method renderLayout() not implemented in ${this.constructor.name}`);
  }

  setInputValue(value) {
    throw new Error(`Method setInputValue(value) not implemented in ${this.constructor.name}`);
  }
}