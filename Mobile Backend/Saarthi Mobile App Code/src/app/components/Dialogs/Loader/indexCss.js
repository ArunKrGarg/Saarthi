import {StyleSheet} from 'react-native';
import {COLORS, DIMEN} from '@constants';
import {getHp, getWp} from '@utils/ViewUtils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    width: getWp(200),
    height: getHp(200),
  },
  lottie: {
    width: '100%',
    height: '100%',
    padding: 0,
    marginStart: 0,
    marginEnd: 0,
  },
});
