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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  SFMTextView,
  SFRITextView,
  SFRTextView,
} from '@components/TextComponents';
import {Icon} from 'native-base';
import {Phone} from '@images';

const SquareIconButton = props => {
  const {onPress} = props;
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          {/* <Icon
            name="phone"
            type="FontAwesome"
            style={{color: Color.green, fontSize: hp('2.5')}}
          /> */}
          <Phone />
          <SFMTextView
            style={{
              color: Color.green,
              marginStart: wp('4'),
              fontSize: FontSize.Text16,
            }}>
            {props.children}
          </SFMTextView>
        </View>
      </TouchableOpacity>
    </>
  );
};

SquareIconButton.propTypes = {};

SquareIconButton.defaultProps = {};
export default SquareIconButton;
