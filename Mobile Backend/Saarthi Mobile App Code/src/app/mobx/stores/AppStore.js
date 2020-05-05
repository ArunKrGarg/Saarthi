import {observable, action} from 'mobx';

export class AppStore {
  @observable loader = false;
  @observable userData = {};
  @observable token = '';
  @observable device = {};
  @observable config = {};
  @observable appId = '';
  @observable profile = {};
  @observable config = {};
  @observable notificationToken = '';
  @observable username = 'farmer@gmail.com';
  @observable password = 'test123';
  @observable selectedFarmer = {};

  //Current Stats

  //Profile Info

  @action setProfile(profile) {
    this.profile = profile;
  }
}
