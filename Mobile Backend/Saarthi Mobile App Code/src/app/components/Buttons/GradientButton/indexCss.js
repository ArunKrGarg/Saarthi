import {StyleSheet} from 'react-native';
import {Color, FontSize} from '@constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  linearGradient: {
    borderRadius: wp('3'),
    marginTop: hp('2'),
    width: wp('80'),
    justifyContent: 'center',
    height: hp('6'),
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: FontSize.Text16,
    fontFamily: 'SFProDisplay-Medium',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  secondaryText: {
    fontSize: FontSize.Text16,
    fontFamily: 'SFProDisplay-Medium',
    textAlign: 'center',
    color: Color.red,
    backgroundColor: 'transparent',
  },
});
