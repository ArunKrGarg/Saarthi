import {observable, action} from 'mobx';
import {getConfigAPI} from '@api';

export class LoginStore {
  @observable isLoading = false;
  @observable appId = '';
  @observable mobile = '';
  @observable otp = '';

  @action setLoader(data) {
    this.isLoading = data;
  }
}
