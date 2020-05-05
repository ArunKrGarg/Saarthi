/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, ColorPropType} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Alert, AlertActive, Profile} from '@images';
import {SFMTextView, HOne, QuoteTextView} from '@components/TextComponents';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import Orientation from 'react-native-orientation';
import {ContactUsApi} from '@api';
import {getDeviceDetails, getAsValue, setAsValue} from '@utils';

const Header = props => {
  const {
    hasNotification,
    onNotificationClick,
    onProfileClick,
    title,
    quote,
  } = props;
  const navigation = useNavigation();
  const {appStore} = useStores();

  return (
    <>
      <SafeAreaView style={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: hp('3'),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{marginStart: wp('5')}}>
            <HOne>{title}</HOne>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginEnd: wp('5'),
            }}>
            <View>
              {appStore.hasNotification == true ? (
                <AlertActive onPress={onNotificationClick} />
              ) : (
                <Alert onPress={onNotificationClick} />
              )}
            </View>

            <View style={{marginStart: wp('5')}}>
              <Profile onPress={onProfileClick} />
            </View>
          </View>
        </View>
        {quote.length > 0 ? (
          <View
            style={{
              marginStart: wp('5'),
              marginEnd: wp('5'),
              marginTop: hp('3'),
            }}>
            <QuoteTextView>{quote}</QuoteTextView>
          </View>
        ) : null}
        <View
          style={{
            width: wp('15'),
            height: hp('0.1'),
            marginTop: hp('4'),
            alignSelf: 'center',
            backgroundColor: Color.gray,
          }}
        />
      </SafeAreaView>
    </>
  );
};

Header.propTypes = {};

Header.defaultProps = {
  hasNotification: false,
  title: 'Hello Again,\nNaruto',
  quote: '',
};
export default observer(Header);
