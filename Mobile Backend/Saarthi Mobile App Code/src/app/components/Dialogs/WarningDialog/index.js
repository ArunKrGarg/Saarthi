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
import Modal from 'react-native-modal';
import {Movement} from '@images';
import {SFMTextView} from '@components/TextComponents';
import {GradientButton} from '@components';

const WarningDialog = props => {
  const {warningInfo, onClose} = props;
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center'}}>
      <Modal
        isVisible={true}
        animationIn="slideInLeft"
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationOut="slideInLeft">
        <View
          style={{
            width: wp('80'),
            height: hp('50'),
            borderRadius: wp('5'),
            alignSelf: 'center',
            backgroundColor: Color.white,
          }}>
          <View style={{alignItems: 'center', marginTop: hp('5')}}>
            <Movement width={wp('20')} height={wp('20')} />
          </View>
          <View style={{marginTop: hp('2'), marginBottom: hp('2')}}>
            <SFMTextView style={{fontWeight: 'bold', alignSelf: 'center'}}>
              Warning!
            </SFMTextView>
          </View>
          <View style={{marginStart: wp('5'), marginEnd: wp('5')}}>
            <SFMTextView style={{textAlign: 'center'}}>
              {warningInfo}
            </SFMTextView>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: hp('2'),
              alignSelf: 'center',
            }}>
            <GradientButton width={wp('50')} height={hp('6')} type="primary">
              Okay
            </GradientButton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

WarningDialog.propTypes = {};

WarningDialog.defaultProps = {
  warningInfo:
    'Your phone location data reveals that you left your property 3 times on 29 March 2020 @ 08:32:12 and travelled 3 kms.',
};
export default WarningDialog;
