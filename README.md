<h1 align="center">Innowise calculator</h1>
<h5 align="center">Only for sky calculations</h5>

<div align="center">
  <div width="50%">
    <h3>Dark Mode</h3>
    <img src="./readme_assets/dark-mode.png">
  </div>
  <div width="50%">
    <h3>Light Mode</h3>
    <img src="./readme_assets/light-mode.png">
  </div>
</div>

<h1 align="center">Task</h1>

<a href="https://docs.google.com/document/d/1EBK8fXs3INFV7GJwYhnF4et83VpBeh4dy-5ZhMDob1U/edit#">Link on task</a>

<h1 align="center">How to use</h1>

|                                        Button                                        | Function                                                |
| :----------------------------------------------------------------------------------: | ------------------------------------------------------- |
| <img src="./readme_assets/theme-changer.png" style="flex-basis: 20%;" width="100px"> | Theme changer                                           |
|    <img src="./readme_assets/numbers.png" style="flex-basis: 20%;" width="150px">    | Buttons for input numbers, work with keyboard           |
|      <img src="./readme_assets/dev.png" style="flex-basis: 20%;" width="100px">      | Devision button, work with keyboard                     |
|     <img src="./readme_assets/mult.png" style="flex-basis: 20%;" width="100px">      | Multiply button, work with keyboard                     |
|     <img src="./readme_assets/minus.png" style="flex-basis: 20%;" width="100px">     | Minus button, work with keyboard                        |
|     <img src="./readme_assets/plus.png" style="flex-basis: 20%;" width="100px">      | Plus button, work with keyboard                         |
|     <img src="./readme_assets/equal.png" style="flex-basis: 20%;" width="100px">     | Equal button, repeat last operation, work with keyboard |
|     <img src="./readme_assets/reset.png" style="flex-basis: 20%;" width="100px">     | Reset button, work with keyboard                        |
|  <img src="./readme_assets/plus-minus.png" style="flex-basis: 20%;" width="100px">   | Plus/minus button                                       |
|    <img src="./readme_assets/percent.png" style="flex-basis: 20%;" width="100px">    | Devision second number by 100                           |
|      <img src="./readme_assets/mc.png" style="flex-basis: 20%;" width="100px">       | Memory clear                                            |
|    <img src="./readme_assets/m-plus.png" style="flex-basis: 20%;" width="100px">     | Add to memory                                           |
|    <img src="./readme_assets/m-minus.png" style="flex-basis: 20%;" width="100px">    | Subtract from the memory                                |
|      <img src="./readme_assets/mr.png" style="flex-basis: 20%;" width="100px">       | Write memory number                                     |
|   <img src="./readme_assets/x-square.png" style="flex-basis: 20%;" width="100px">    | Square                                                  |
|    <img src="./readme_assets/x-cube.png" style="flex-basis: 20%;" width="100px">     | Cube                                                    |
|    <img src="./readme_assets/x-in-y.png" style="flex-basis: 20%;" width="100px">     | Power                                                   |
|    <img src="./readme_assets/e-in-x.png" style="flex-basis: 20%;" width="100px">     | e power                                                 |
|   <img src="./readme_assets/ten-in-x.png" style="flex-basis: 20%;" width="100px">    | ten power                                               |
|    <img src="./readme_assets/1-dev-x.png" style="flex-basis: 20%;" width="100px">    | Devide 1                                                |
|  <img src="./readme_assets/square-root.png" style="flex-basis: 20%;" width="100px">  | Square root                                             |
|   <img src="./readme_assets/cube-root.png" style="flex-basis: 20%;" width="100px">   | Cube root                                               |
|    <img src="./readme_assets/y-root.png" style="flex-basis: 20%;" width="100px">     | Root                                                    |
|    <img src="./readme_assets/x-fact.png" style="flex-basis: 20%;" width="100px">     | Factorial                                               |
|     <img src="./readme_assets/back.png" style="flex-basis: 20%;" width="100px">      | Previous operation                                      |
|                                                                                      |                                                         |

<h1 align="center">How to run</h1>

<a href="https://skywebtehnol.ru/innowise-calc/SPR/">Live Demo</a>

```
    npm install
    npm run dev / npm run build
```

<h1 align="center">Structure</h1>

- Root folder
  - .husky / folder for husky settings(pre-commit hook)
  - coverage / folder for jest testing data
  - readme_assets / assets for README.md file
  - src / main project files
    - modules / project modules
      - Commands / calculator commands
      - Commands.tests / tests of main functions
      - drawers / classes responsible for rendering
      - helpers / supporting modules

<h1 align="center">Naming</h1>

Files with a capital letter contains the class:

```
CalcMath.js
```

Files with a small letter contain functions, variables, etc.

```
buttonNames.js
```

Files with functions and classes at the same time divided into files with the appropriate name.

<h1 align="center">About test</h1>

Describtion of Command.test file

```JavaScript
import Command from '../Commands/Command'; //import of Command for test
import CommandsTester from './CommandsTester'; //import custom tester

const commandTester = new CommandsTester(Command); //get an tester object

commandTester.fillTestValues(operand1, operand2, operator, answerInOperand1); // add values for test command

commandTester.test(stringFromThrownError, precisionForFloatNumbers); // run test
```

run tests:

```
npm run test
```
