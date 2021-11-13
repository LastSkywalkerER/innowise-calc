export default class CommandsContainer {
  constructor() {
    this.commandsCollection = [];
  }

  popCommand() {
    return this.commandsCollection.pop();
  }

  pushCommand(command) {
    this.commandsCollection.push(command);
  }
}