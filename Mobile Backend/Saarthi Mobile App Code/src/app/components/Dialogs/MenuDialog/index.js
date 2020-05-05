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
import {Profile} from '@images';
import {SFMTextView} from '@components/TextComponents';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';

const MenuDialog = props => {
  const {name, onClose, isHome} = props;
  const navigation = useNavigation();
  const {appStore} = useStores();
  return (
    <View>
      <Modal
        isVisible={true}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationIn="fadeIn"
        animationOut="fadeOut">
        <View
          style={{
            position: 'absolute',
            top: isHome == true ? hp('1.5') : hp('8'),
            right: wp('0'),
          }}>
          <View
            style={{
              alignSelf: 'flex-end',
              borderWidth: 2,
              borderColor: Color.white,
              borderRadius: wp('10'),
              width: wp('10'),
              height: wp('10'),
              marginBottom: hp('1'),
            }}>
            <Profile
              width={wp('10')}
              height={wp('10')}
              style={{marginStart: wp('-0.4'), marginTop: wp('-0.45')}}
            />
          </View>
          <View
            style={{
              width: wp('60'),
              height: hp('50'),
              borderRadius: wp('5'),
              backgroundColor: Color.white,
            }}>
            <View
              style={{
                width: wp('60'),
                height: hp('10'),
                borderTopRightRadius: wp('5'),
                borderTopLeftRadius: wp('5'),
                backgroundColor: Color.blue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SFMTextView style={{color: Color.white}}>Welcome</SFMTextView>
            </View>
            <View>
              <View
                onStartShouldSetResponder={() => {
                  onClose();
                }}
                style={{
                  height: hp('10'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  marginEnd: wp('10'),
                  zIndex: 5,
                  marginStart: wp('10'),
                  borderBottomColor: Color.border,
                }}>
                <SFMTextView style={{fontWeight: 'bold'}} onPress={onClose}>
                  Home
                </SFMTextView>
              </View>
              <View
                onStartShouldSetResponder={() => {
                  onClose();
                  //navigation.navigate('HelpScreen');
                }}
                style={{
                  height: hp('10'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  marginEnd: wp('10'),
                  marginStart: wp('10'),
                  borderBottomColor: Color.border,
                }}>
                <SFMTextView style={{fontWeight: 'bold'}}>Help</SFMTextView>
              </View>
              <View
                onStartShouldSetResponder={() => {
                  onClose();
                  // navigation.navigate('FAQScreen');
                }}
                style={{
                  height: hp('10'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  marginEnd: wp('10'),
                  marginStart: wp('10'),
                  borderBottomColor: Color.border,
                }}>
                <SFMTextView style={{fontWeight: 'bold'}}>FAQ</SFMTextView>
              </View>
              <View
                onStartShouldSetResponder={() => {
                  onClose();
                  navigation.navigate('UserSelectionScreen');
                }}
                style={{
                  height: hp('10'),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginEnd: wp('10'),
                  marginStart: wp('10'),
                }}>
                <SFMTextView style={{fontWeight: 'bold'}}>Log Out</SFMTextView>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

MenuDialog.propTypes = {};

MenuDialog.defaultProps = {
  name: '',
};
export default observer(MenuDialog);
