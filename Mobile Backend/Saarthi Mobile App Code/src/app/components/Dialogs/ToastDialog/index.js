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

const ToastDialog = props => {
  const {message, isError, isVisible} = props;
  const navigation = useNavigation();
  return (
    <View>
      <Modal
        isVisible={isVisible}
        animationIn="fadeIn"
        backdropColor="transparent"
        animationOut="fadeOut">
        <View style={styles.container}>
          <View
            style={{
              ...styles.innerContainer,
              backgroundColor: isError == true ? Color.red : Color.green,
            }}>
            <Icon
              name="closecircle"
              type="AntDesign"
              style={{color: Color.white, fontSize: wp('4')}}
            />
          </View>
          <View style={{marginStart: wp('2'), alignItems: 'center'}}>
            <SFMTextView style={{color: Color.white, textAlign: 'center'}}>
              {message}
            </SFMTextView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

ToastDialog.propTypes = {};

ToastDialog.defaultProps = {
  isError: false,
  isVisible: false,
};
export default ToastDialog;
