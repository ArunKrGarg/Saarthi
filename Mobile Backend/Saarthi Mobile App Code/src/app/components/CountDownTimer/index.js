/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CountDown from 'react-native-countdown-component';

const CountDownTimer = props => {
  const {countDownInSeconds, onFinish} = props;
  const navigation = useNavigation();
  return (
    <>
      <View>
        <CountDown
          size={20}
          until={countDownInSeconds}
          onFinish={onFinish}
          digitStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'rgba(255,255,255,0.5)',
            alignSelf: 'flex-start',
            alignItems: 'center',
          }}
          digitTxtStyle={{
            color: Color.red,
            fontSize: hp('3'),
            fontWeight: 'normal',
            fontFamily: 'SFProDisplay-Regular',
          }}
          timeLabelStyle={{
            color: Color.primary,
            fontWeight: 'normal',
            marginTop: hp('-1'),
            fontFamily: 'SFProDisplay-Regular',
          }}
          separatorStyle={{color: 'rgba(255,255,255,0.5)'}}
          timeToShow={['D', 'H', 'M']}
          timeLabels={{d: 'Days', h: 'Hours', m: 'minutes', s: 'seconds'}}
          showSeparator
        />
      </View>
    </>
  );
};

CountDownTimer.propTypes = {};

CountDownTimer.defaultProps = {
  countDownInSeconds: 1209600,
};
export default CountDownTimer;
