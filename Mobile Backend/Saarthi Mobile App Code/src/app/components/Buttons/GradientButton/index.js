import React from 'react';
import {Text, View} from 'react-native';
import styles from './indexCss';
import {Color} from '@constants';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SquareButton} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const GradientButton = props => {
  const {onPress, style, type, width, height} = props;
  if (type == 'primary') {
    return (
      <>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
              useAngle={true}
              angle={104}
              colors={[Color.button.g1, Color.button.g2, Color.button.g3]}
              style={{
                ...styles.linearGradient,
                ...props.style,
                width: width,
                height: height,
              }}>
              <Text style={styles.buttonText}>{props.children}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </>
    );
  } else if (type == 'secondary') {
    return (
      <>
        <View style={{alignSelf: 'center', marginTop: hp('2')}}>
          <SquareButton onPress={onPress} width={width} height={height}>
            <Text style={styles.secondaryText}>{props.children}</Text>
          </SquareButton>
        </View>
      </>
    );
  } else if (type == 'approved') {
    return (
      <>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
              useAngle={true}
              angle={104}
              colors={[Color.green, Color.green, Color.green]}
              style={{
                ...styles.linearGradient,
                ...props.style,
                width: width,
                height: height,
              }}>
              <Text style={styles.buttonText}>{props.children}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </>
    );
  } else if (type == 'rejected') {
    return (
      <>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
              useAngle={true}
              angle={104}
              colors={[Color.red, Color.red, Color.red]}
              style={{
                ...styles.linearGradient,
                ...props.style,
                width: width,
                height: height,
              }}>
              <Text style={styles.buttonText}>{props.children}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </>
    );
  } else if (type == 'new') {
    return (
      <>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={onPress}>
            <LinearGradient
              useAngle={true}
              angle={104}
              colors={[Color.button.g1, Color.button.g2, Color.button.g3]}
              style={{
                ...styles.linearGradient,
                ...props.style,
                width: width,
                height: height,
              }}>
              <Text style={styles.buttonText}>{props.children}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </>
    );
  }
};

GradientButton.propTypes = {};

GradientButton.defaultProps = {
  type: 'primary',
  width: wp('70'),
  height: hp('6'),
};
export default GradientButton;
