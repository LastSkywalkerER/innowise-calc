"use strict";

import {
  buttonsHard,
  buttonsSimpleUp,
  buttonsSimpleRight,
  buttonsNumbers,
  buttonNames,
} from "./buttonNames";

export const command = (event, input) => {
  const action = event.target.getAttribute("calcAct");
  if (buttonsNumbers.includes(action)) {
    input.value += action;
  }
};
