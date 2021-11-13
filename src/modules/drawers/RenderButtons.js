/* eslint-disable class-methods-use-this */
import CalculatorDrawer from './CalculatorDrawer';

export default class RenderButtons extends CalculatorDrawer {
  appendButtons(buttons, place) {
    const renderedButtons = this.renderButtons(buttons);
    const buttonsPlace = place.split(' ').reduce((prev, curr) => {
      const currPlace = prev.querySelector(`.${curr}`) ? prev.querySelector(`.${curr}`) : document.createElement('div');

      if (!currPlace.classList.contains(`.${curr}`)) {
        currPlace.classList.add(curr);
        prev.append(currPlace);
      }

      return currPlace;
    }, this.buttonsWrapper);

    renderedButtons.forEach((button) => buttonsPlace.append(button));
  }

  renderButtons(buttons) {
    return buttons.map((button) => {
      const buttonElement = document.createElement('div');
      buttonElement.classList.add('button');

      if (button.buttonText === '0') {
        buttonElement.classList.add('zero');
      }

      buttonElement.innerText = button.buttonText;
      buttonElement.setAttribute('calcAct', button.name);

      return buttonElement;
    });
  }

  renderInput() {
    const inputElement = document.createElement('div');
    inputElement.classList.add('calculator-input');
    inputElement.classList.add('text-field');
    inputElement.innerHTML = `
    <input
      class="text-field__input"
      type="text"
      placeholder="Сalculator for sky calculations. Try me ;)"
      disabled
    />`;
    return inputElement;
  }

  renderLayout(onClick) {
    this.buttonsWrapper = document.createElement('div');
    this.buttonsWrapper.classList.add('calculator-buttons');

    const inputElement = this.renderInput();

    [this.input] = inputElement.childNodes;

    this.rootElement.append(inputElement);
    this.rootElement.append(this.buttonsWrapper);

    this.buttonsWrapper.addEventListener('click', (event) => {
      onClick.call(undefined, event);
    });

    this.buttonsWrapper.addEventListener('mousedown', (event) => {
      event.preventDefault();
      if (event.target.hasAttribute('calcAct')) {
        this.clickedEffect(event.target);
      }
    });
  }

  clickedEffect(buttonElement) {
    buttonElement.classList.add('clicked-button');
    setTimeout(() => {
      buttonElement.classList.remove('clicked-button');
    }, 300);
  }

  setInputValue(value) {
    this.input.value = value;
  }

  bindKeyboard(onKeydown) {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      // eslint-disable-next-line prefer-destructuring
      let key = event.key;
      switch (key) {
        case 'Delete':
          key = 'AC';
          break;
        case 'Backspace':
          key = 'AC';
          break;
        case 'Enter':
          key = '=';
          break;
        case ',':
          key = '.';
          break;
        default:
          break;
      }

      try {
        const button = onKeydown(key);
        this.clickedEffect(this.buttonsWrapper.querySelector(`[calcAct="${button.name}"]`));
        // eslint-disable-next-line no-empty
      } catch (e) {
        // console.warn(e);
      }
    });
  }
}