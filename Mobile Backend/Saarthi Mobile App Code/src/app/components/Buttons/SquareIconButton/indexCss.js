import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: wp('80'),
    height: hp('6'),
    alignSelf: 'center',
    marginTop: hp('2'),
    backgroundColor: Color.white,
    borderColor: Color.green,
    borderWidth: 1,
    borderRadius: wp('3'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
