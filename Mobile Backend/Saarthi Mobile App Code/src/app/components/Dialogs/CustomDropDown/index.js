/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Picker, Icon} from 'native-base';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

var tempKey = '';

const CustomDropDown = props => {
  const {style, list, onValueChange, key, label, selectedVal} = props;
  const navigation = useNavigation();
  const [selected2, setselected2] = useState('');
  const tempList = list;
  tempKey = props.key;
  const tempLabel = label;

  return (
    <>
      <View
        style={{
          borderWidth: 1,
          borderColor: Color.border,
          borderRadius: wp('3'),
          width: wp('50 '),
          backgroundColor: Color.white,
          ...props.style,
        }}>
        <Picker
          mode="dropdown"
          style={{width: wp('50'), color: Color.primary, ...props.style}}
          placeholder="Select"
          placeholderStyle={{color: Color.secondary}}
          selectedValue={selectedVal}
          onValueChange={(value, index) => {
            console.log('TempKey:', tempKey);
            console.log('-----', tempList[index][props.key], index);
            onValueChange(index);
          }}>
          {list.map(item => {
            return <Picker.Item label={item[label]} value={item[key]} />;
          })}
        </Picker>
      </View>
    </>
  );
};

CustomDropDown.propTypes = {};

CustomDropDown.defaultProps = {};
export default CustomDropDown;
