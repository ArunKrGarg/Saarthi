import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './src/app/RootNavigator';

export default function App() {
  React.useEffect(() => {
    console.log('SPLASH HIDE');
    SplashScreen.hide();
  }, []);

  return <RootNavigator />;
}
