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

const SOSTimer = props => {
  const {countDownInSeconds, onFinish} = props;
  const navigation = useNavigation();
  return (
    <>
      <View style={{marginBottom: hp('2')}}>
        <CountDown
          size={30}
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
            fontWeight: 'normal',
            fontFamily: 'SFProDisplay-Regular',
          }}
          timeLabelStyle={{
            color: Color.primary,
            fontWeight: 'normal',
            fontFamily: 'SFProDisplay-Regular',
          }}
          separatorStyle={{color: 'rgba(255,255,255,0.5)'}}
          timeToShow={['S']}
          timeLabels={{s: null}}
          showSeparator
        />
      </View>
    </>
  );
};

SOSTimer.propTypes = {};

SOSTimer.defaultProps = {
  countDownInSeconds: 10,
};
export default SOSTimer;
