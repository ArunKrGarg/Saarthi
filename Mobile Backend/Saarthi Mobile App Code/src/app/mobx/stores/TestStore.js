import {observable, action} from 'mobx';
export class TestStore {
  @observable showHint = false;
  @observable showHintBox = false;

  @action setShowHint(visible) {
    this.showHint = visible;
  }

  @action setShowHintBox(visible) {
    this.showHintBox = visible;
  }

  @action reset() {
    this.showHintBox = false;
    this.showHint = false;
  }
}
