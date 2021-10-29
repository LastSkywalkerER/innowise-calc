import renderButtons from "./renderButtons";
import command from "./command";

import "./style.sass";

const calculator = document.getElementById("calculator");
const input = calculator.querySelector(".text-field__input");
const buttons = calculator.querySelector(".calculator-buttons");
const buttonsHardBlock = buttons.querySelector(".calculator-buttons_hard");
const buttonsSimpleUpBlock = buttons.querySelector(".simple--up");
const buttonsSimpleRightBlock = buttons.querySelector(".simple--right");
const buttonsNumbersBlock = buttons.querySelector(".numbers");

renderButtons(
  buttonsHardBlock,
  buttonsSimpleUpBlock,
  buttonsSimpleRightBlock,
  buttonsNumbersBlock
);

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});

buttons.addEventListener("click", (event) => {
  command(event, input);
});

buttons.addEventListener("mousedown", (event) => {
  if (event.target.hasAttribute("calcAct")) {
    event.target.classList.add("clicked-button");
    setTimeout(() => {
      event.target.classList.remove("clicked-button");
    }, 300);
  }
});
