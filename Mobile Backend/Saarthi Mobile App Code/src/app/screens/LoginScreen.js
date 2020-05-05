import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, StyleSheet, ToastAndroid} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize, ApiEndPoint} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Back} from '@images';
import {HOne, SFMTextView} from '@components/TextComponents';
import {CustomTextInput, GradientButton} from '@components';
import Orientation from 'react-native-orientation';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {PhoneVerifiedDialog} from '@components';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import {VerifyOtpApi, VerifyMobileApi} from '@api';
import {getDeviceDetails, getAsValue, setAsValue} from '@utils';
import {StackActions, CommonActions} from '@react-navigation/native';

import {API} from '@api';

import {Toast} from 'native-base';

const LoginScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  let heading = 'You are in safe hands';
  const store = useStores();
  const {appStore} = useStores();

  const redirect = async () => {
    if (
      store.appStore.username.length > 0 &&
      store.appStore.password.length > 0
    ) {
      let req = {
        body: {},
        store: store,
        baseUrl: ApiEndPoint.MY_BASE_URL,
      };
      let res = await API(ApiEndPoint.LOGIN, req);
      console.log(JSON.stringify(res.data));
      let users = res.data.users;
      if (users.hasOwnProperty(appStore.username.toLowerCase())) {
        let user = users[appStore.username.toLowerCase()];
        runInAction(() => {
          appStore.userData = user;
          appStore.config = res.data;
        });
        console.log('USER DETAILS' + JSON.stringify(user));
        if (user.password == appStore.password) {
          switch (user.type) {
            case 'farmer':
              props.navigation.navigate('FarmerHomeScreen');
              break;
            case 'coldstorage':
              props.navigation.navigate('ColdStorageHomeScreen');
              break;
            case 'bank':
              props.navigation.navigate('BankHomeScreen');
              break;
            default:
              break;
          }
        } else {
          Toast.show({
            text: 'Wrong Password',
            duration: 10000,
            buttonText: 'OK',
          });
        }

        // if (props.route.params && props.route.params.type == 'Farmer') {
        //   props.navigation.navigate('FarmerHomeScreen');
        // } else if (props.route.params && props.route.params.type == 'Banker') {
        //   props.navigation.navigate('BankHomeScreen');
        // } else {
        //   props.navigation.navigate('ColdStorageHomeScreen');
        // }
      } else {
        Toast.show({
          text: 'Login Failed! User doesnt exist',
        });
      }
    } else {
      Toast.show({text: 'Please enter username and password'});
    }
  };

  return (
    <>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <SafeAreaView>
        <View style={{backgroundColor: Color.bg}}>
          <View style={{marginTop: hp('2'), marginStart: wp('5')}}>
            <Back
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View
            style={{
              marginTop: hp('20'),
              marginStart: wp('5'),
              marginEnd: wp('5'),
            }}>
            <HOne style={{color: Color.red}}>
              {props.route.params.type + ' Login'}
            </HOne>
            <HOne>{heading}</HOne>
            <View style={{marginTop: hp('2')}}>
              <CustomTextInput
                placeholder="Enter Email"
                placeholderTextColor={Color.textColor.secondary}
                style={{fontSize: FontSize.Text16, width: wp('90')}}
                onChangeText={val => {
                  runInAction(() => {
                    store.appStore.username = val;
                  });
                }}
                keyboardType="default"
                autoCompleteType="email"
                multiline={false}
                value={store.appStore.username}
              />
              <CustomTextInput
                placeholder="Enter Password"
                placeholderTextColor={Color.textColor.secondary}
                style={{
                  fontSize: FontSize.Text16,
                  width: wp('90'),
                  marginTop: hp('2'),
                }}
                onChangeText={val => {
                  runInAction(() => {
                    store.appStore.password = val;
                  });
                }}
                keyboardType="default"
                multiline={false}
                autoCompleteType="password"
                secureTextEntry={true}
                value={store.appStore.password}
              />
            </View>
            <View>
              <GradientButton
                type="primary"
                width={wp('90')}
                height={hp('7')}
                onPress={() => {
                  redirect();
                }}>
                Login
              </GradientButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

LoginScreen.propTypes = {};

LoginScreen.defaultProps = {};
export default observer(LoginScreen);
