import axios from 'axios';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import Config from 'react-native-config';
import {Text, View, StatusBar, ToastAndroid} from 'react-native';

const axiosAuth = (store, baseUrl) => {
  const instance = axios.create({
    // baseURL: 'http://27.109.14.75:85/Mindspark/Framework/Mindspark/CommonLogin',
    baseURL: baseUrl,
  });

  instance.defaults.headers.common['Content-Type'] = 'application/json';

  instance.interceptors.request.use(
    request => {
      //Set loader to true
      // console.log(`\n\nRequest Log Data>>>>${JSON.stringify(request.data)}`);
      // console.log(
      //   `\n\nRequest Log Header>>>>${JSON.stringify(request.headers.common)}`,
      // );
      return request;
    },
    error => {
      console.warn(`Axios Request Error000>>>`, JSON.stringify(error));
      ToastAndroid.show(error.message, ToastAndroid.SHORT);

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => {
      //Set loader to false
      // console.log(
      //   `\n\nAxios Response data >>>>${JSON.stringify(response.data)}`,
      // );
      // console.log(
      //   `\Response Log Header>>>>${JSON.stringify(response.headers.common)}`,
      // );
      return response;
    },
    error => {
      //console.warn(`Axios Response Error009>>>${error}`);
      console.warn(`Axios Request Error0000>>>`, JSON.stringify(error));
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
    },
  );

  return instance;
};

export default axiosAuth;
