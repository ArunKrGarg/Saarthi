import {StyleSheet} from 'react-native';
import {Color} from '@constants';
import {FontSize} from '@constants';

export default StyleSheet.create({
  TextStyle: {
    color: Color.primary,
    fontSize: FontSize.Text16,
  },
  SFMTextView: {
    fontFamily: 'SFProDisplay-Medium',
  },
  SFRTextView: {
    fontFamily: 'SFProDisplay-Regular',
  },
  SFRITextView: {
    fontFamily: 'SFProDisplay-RegularItalic',
  },
  H1: {
    fontFamily: 'SFProDisplay-Medium',
    color: Color.primary,
    fontSize: FontSize.Text26,
  },
  H2: {
    fontFamily: 'SFProDisplay-Medium',
    color: Color.primary,
    fontSize: FontSize.Text20,
  },
  H3: {
    fontFamily: 'SFProDisplay-Medium',
    color: Color.primary,
    fontSize: FontSize.Text18,
  },
  Body: {
    fontFamily: 'SFProDisplay-Medium',
    color: Color.secondary,
    fontSize: FontSize.Text18,
    fontStyle: 'normal',
  },
  Quote: {
    fontFamily: 'SFProDisplay-RegularItalic',
    color: Color.secondary,
    fontSize: FontSize.Text16,
    fontStyle: 'italic',
  },
});
