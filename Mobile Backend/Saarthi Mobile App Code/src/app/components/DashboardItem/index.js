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
import {Selfie, Symptoms} from '@images';
import {SFMTextView, HOne, H2} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Empty} from '@images';
import {Icon} from 'native-base';

const DashboardItem = props => {
  const {SvgIcon, title, hasDue, onPress, iconName, iconType} = props;
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          key="selfie"
          style={{
            alignSelf: 'center',
            width: wp('90'),
            marginTop: hp('2'),
            backgroundColor: Color.white,
            borderRadius: wp('3'),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: hp('2'),
              marginBottom: hp('2'),
              marginStart: wp('5'),
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Empty />
              <Icon
                name={iconName}
                type={iconType}
                style={{
                  fontSize: wp('6'),
                  color: Color.white,
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
            {/* <SvgIcon /> */}
          </View>
          <View>
            <H2 style={{fontWeight: 'bold', marginStart: wp('5')}}>{title}</H2>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginEnd: wp('5'),
            }}>
            {hasDue == true ? (
              <SFMTextView style={{color: Color.red}}>Due Now</SFMTextView>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

DashboardItem.propTypes = {};

DashboardItem.defaultProps = {};
export default DashboardItem;
