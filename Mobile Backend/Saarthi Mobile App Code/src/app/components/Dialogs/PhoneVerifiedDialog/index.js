import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './indexCss';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import {
  SFMTextView,
  SFRITextView,
  SFRTextView,
} from '@components/TextComponents';
import {Completed} from '@images';

const PhoneVerifiedDialog = props => {
  const {message, isError} = props;
  const navigation = useNavigation();
  return (
    <View>
      <Modal
        isVisible={true}
        animationIn="slideInUp"
        backdropColor="transparent"
        animationOut="slideInDown">
        <View style={styles.container}>
          <View
            style={{
              ...styles.innerContainer,
              backgroundColor: isError == true ? Color.red : Color.green,
            }}>
            <Completed />
          </View>
          <View
            style={{
              marginStart: wp('2'),
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <SFMTextView
              style={{
                color: Color.white,
                textAlign: 'left',
                width: wp('70'),
                fontSize: FontSize.Text14,
              }}>
              {message}
            </SFMTextView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

PhoneVerifiedDialog.propTypes = {};

PhoneVerifiedDialog.defaultProps = {
  message: 'Your mobile number has been verified',
  isError: false,
};
export default PhoneVerifiedDialog;
