export default class CommandsContainer {
  constructor() {
    this.commandsCollection = [];
  }

  getLastCommand() {
    return this.commandsCollection[this.commandsCollection.length - 1];
  }

  popCommand() {
    return this.commandsCollection.pop();
  }

  pushCommand({
    executedCommand,
    Command,
  }) {
    this.commandsCollection.push({
      executedCommand,
      Command,
    });
  }
}