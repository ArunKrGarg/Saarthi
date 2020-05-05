import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '@constants';
import {FontSize} from '@constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: wp('80'),
    height: hp('7'),
    backgroundColor: Color.white,
    color: Color.textColor.primary,
    fontSize: FontSize.Text14,
    borderColor: Color.white,
    borderRadius: wp('3'),
    paddingStart: wp('5'),
    borderWidth: 1,
    fontFamily: 'SFProDisplay-Regular',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
