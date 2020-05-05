import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CSDetailsScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>componentName</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

CSDetailsScreen.propTypes = {};

CSDetailsScreen.defaultProps = {};
export default CSDetailsScreen;
