import {Root} from 'native-base';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {Button, Text, TextInput, View, Animated, Easing} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import {
  FarmerHomeScreen,
  UserSelectionScreen,
  LoginScreen,
  ColdStorageHomeScreen,
  BankHomeScreen,
  ApplyLoanScreen,
  CSDetailsScreen,
  ComponentListingScreen,
  ApproveLoanScreen,
  ApproveContractScreen,
  ApplicationDetailsScreen,
  HistoryScreen,
  RepayScreen,
} from './screens';
// import {MenuBar} from '@components';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="ComponentListingScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSelectionScreen"
          component={UserSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ComponentListingScreen"
          component={ComponentListingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      initialRouteName="FarmerHomeScreen"
      drawerContent={props => {
        return <Text>Menu</Text>;
      }}>
      <Drawer.Screen
        name="FarmerHomeScreen"
        component={FarmerHomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ColdStorageHomeScreen"
        component={ColdStorageHomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="FarmerHomeScreen"
        component={FarmerHomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="BankHomeScreen"
        component={BankHomeScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ApplyLoanScreen"
        component={ApplyLoanScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="CSDetailsScreen"
        component={CSDetailsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ComponentListingScreen"
        component={ComponentListingScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default function RootNavigator(props) {
  const {state} = props;
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <Root>
        <Stack.Navigator initialRouteName="UserSelectionScreen">
          <Stack.Screen
            name="UserSelectionScreen"
            component={UserSelectionScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RepayScreen"
            component={RepayScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HistoryScreen"
            component={HistoryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ApplicationDetailsScreen"
            component={ApplicationDetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ApproveContractScreen"
            component={ApproveContractScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ApproveLoanScreen"
            component={ApproveLoanScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="FarmerHomeScreen"
            component={FarmerHomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ColdStorageHomeScreen"
            component={ColdStorageHomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BankHomeScreen"
            component={BankHomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ApplyLoanScreen"
            component={ApplyLoanScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CSDetailsScreen"
            component={CSDetailsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ComponentListingScreen"
            component={ComponentListingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </Root>
    </NavigationContainer>
  );
}
