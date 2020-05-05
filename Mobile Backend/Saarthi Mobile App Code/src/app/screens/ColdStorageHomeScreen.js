/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
  Alert,
  BackHandler,
} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';

import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Header,
  DashboardItem,
  CountDownTimer,
  GradientButton,
  SquareIconButton,
  MenuDialog,
  Loader,
} from '@components';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Selfie, Symptoms, FarmerHome, BankHome, ColdHome} from '@images';
import {SFMTextView, HOne, H2} from '@components/TextComponents';
import {ProfileApi, UploadSelfie, ConfigApi, LocationChangeApi} from '@api';
const moment = require('moment');

import ImagePicker from 'react-native-image-picker';
import {getDeviceDetails, getAsValue, setAsValue} from '@utils';

import Geocoder from 'react-native-geocoding';
// import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import Orientation from 'react-native-orientation';

const ColdStorageHomeScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setloading] = useState(true);
  const {appStore} = useStores();
  return (
    <>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Header
            title={'Hello Again,\n ' + appStore.userData.name}
            quote="“It does not matter how slowly you go as long as you do not stop.”"
            onNotificationClick={() => {
              //props.navigation.navigate('AlertsScreen');
            }}
            hasNotification={true}
            onProfileClick={() => {
              setShowMenu(true);
            }}
          />
          <View style={{marginTop: hp('0')}}>
            <ScrollView>
              <View>
                <DashboardItem
                  SvgIcon={Selfie}
                  iconName="dollar"
                  iconType="FontAwesome"
                  title="View Requests"
                  hasDue={false}
                  onPress={() => {
                    props.navigation.navigate('ApproveLoanScreen');
                  }}
                />
                <DashboardItem
                  SvgIcon={Symptoms}
                  iconName="list-alt"
                  iconType="FontAwesome"
                  title="View History"
                  hasDue={false}
                  onPress={() => {
                    props.navigation.navigate('HistoryScreen');
                  }}
                />
                <View
                  key="qillustration"
                  style={{
                    marginTop: hp('2'),
                    backgroundColor: Color.white,
                    borderRadius: wp('3'),
                    width: wp('90'),
                    alignSelf: 'center',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        marginTop: hp('2'),
                      }}>
                      <H2 style={{textAlign: 'center'}}>
                        {'Cold Storage Owner'}
                      </H2>
                    </View>
                  </View>
                  <View style={{marginTop: hp('1')}}>
                    <ColdHome width={wp('80')} height={wp('50')} />
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          {showMenu && (
            <MenuDialog
              isHome={true}
              onClose={() => {
                setShowMenu(false);
              }}
            />
          )}
        </View>
      </SafeAreaView>
      <View
        key="bottomBtns"
        style={{
          position: 'absolute',
          bottom: hp('3'),
          marginTop: hp('3'),
          marginStart: wp('5'),
          marginEnd: wp('5'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flex: 1,
            marginStart: wp('5'),
          }}>
          <View style={{alignSelf: 'center', alignItems: 'center'}}>
            <SquareIconButton
              onPress={() => {
                //props.navigation.navigate('ContactHelplineScreen');
              }}>
              Contact Helpline
            </SquareIconButton>
          </View>
          <View style={{marginStart: wp('10')}}>
            {/* <GradientButton
              type="primary"
              width={wp('20')}
              onPress={() => {
                props.navigation.navigate('SOSScreen');
              }}>
              SOS
            </GradientButton> */}
          </View>
        </View>
      </View>
      {loading == true ? <Loader /> : null}
    </>
  );
};

ColdStorageHomeScreen.propTypes = {};

ColdStorageHomeScreen.defaultProps = {};
export default ColdStorageHomeScreen;
