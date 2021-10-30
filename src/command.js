export default class Command {
  constructor(subject, actionList) {
    this.subject = subject;
    this.actionList = actionList;
  }

  execute(event) {
    const text = event.target.getAttribute('calcAct');
    const action = Object.keys(this.actionList).reduce((previousValue, currentValue) => {
      if (this.actionList[currentValue] === text) {
        return currentValue;
      }
      return previousValue;
    }, '');
    this.subject[action](text, action);
  }
}