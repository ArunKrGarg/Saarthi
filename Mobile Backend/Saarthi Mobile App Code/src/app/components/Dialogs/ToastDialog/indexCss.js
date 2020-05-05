import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    width: wp('80'),
    height: hp('6'),
    position: 'absolute',
    bottom: hp('10'),
    borderRadius: wp('5'),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    width: wp('8'),
    height: wp('8'),
    marginStart: wp('3'),
    borderRadius: wp('8'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
