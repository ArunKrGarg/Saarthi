import React, {createContext} from 'react';
import {LoginStore, TestStore, AppStore} from '../stores';

export const storesContext = createContext({
  loginStore: new LoginStore(),
  themeStore: new TestStore(),
  appStore: new AppStore(),
});
