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
import {Movement, Completed} from '@images';
import {SFMTextView} from '@components/TextComponents';
import {GradientButton} from '@components';
import {Icon} from 'native-base';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';

const SuccessDialog = props => {
  const {info, onClose, isRejected, title} = props;
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'center'}}>
      <Modal
        isVisible={true}
        animationIn="fadeIn"
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationOut="fadeOut">
        <View
          style={{
            width: wp('80'),
            height: hp('50'),
            borderRadius: wp('5'),
            alignSelf: 'center',
            backgroundColor: Color.white,
          }}>
          <View style={{alignItems: 'center', marginTop: hp('5')}}>
            {isRejected == false ? (
              <Completed width={wp('20')} height={wp('20')} />
            ) : (
              <Icon
                name="x-circle"
                type="Feather"
                style={{fontSize: wp('20'), color: Color.red}}
              />
            )}
          </View>
          <View style={{marginTop: hp('2'), marginBottom: hp('2')}}>
            <SFMTextView style={{fontWeight: 'bold', alignSelf: 'center'}}>
              {title}
            </SFMTextView>
          </View>
          <View style={{marginStart: wp('5'), marginEnd: wp('5')}}>
            <SFMTextView style={{textAlign: 'center'}}>{info}</SFMTextView>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: hp('2'),
              alignSelf: 'center',
            }}>
            <GradientButton
              width={wp('50')}
              height={hp('6')}
              type="primary"
              onPress={onClose}>
              Okay
            </GradientButton>
          </View>
        </View>
      </Modal>
    </View>
  );
};

SuccessDialog.propTypes = {};

SuccessDialog.defaultProps = {
  warningInfo: ' ',
  title: ' Loan Applied Successfully',
  isRejected: false,
};
export default SuccessDialog;
