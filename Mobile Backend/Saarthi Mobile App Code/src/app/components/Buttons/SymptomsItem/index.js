/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Switch} from 'native-base';
import {Cough, Fever, farmer2} from '@images';
import {SFMTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SymptomsItem = props => {
  const {image, onPress, text, value, isSelected} = props;
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            width: wp('40'),
            paddingBottom: hp('2'),
            marginBottom: hp('2'),
            paddingStart: wp('2'),
            paddingTop: hp('2'),
            paddingEnd: wp('2'),
            borderRadius: wp('5'),
            backgroundColor: Color.white,
            borderWidth: 1,
            borderColor: isSelected == true ? Color.red : Color.white,
          }}>
          <View style={{alignSelf: 'center'}}>
            {/* <SvgIcon width={wp('22')} height={wp('22')} /> */}
            <Image source={image} style={{width: wp('22'), height: wp('22')}} />
          </View>
          <View style={{alignItems: 'center', marginTop: hp('1')}}>
            <SFMTextView style={{textAlign: 'center'}}>{text}</SFMTextView>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

SymptomsItem.propTypes = {};

SymptomsItem.defaultProps = {
  image: farmer2,
  text: 'Farmer',
};
export default SymptomsItem;
