import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Color} from '@constants';

export default {
  general: {
    borderRadius: wp('3'),
    backgroundColor: Color.bg,
    backgroundDarker: Color.bg,
    backgroundPlaceholder: Color.bg,
    textColor: Color.red,
    backgroundProgress: Color.bg,
    borderWidth: 1,
    borderColor: Color.red,
    raiseLevel: 0,
  },
  textStyle: {
    filter: {
      color: Color.white,
    },
    sort: {
      color: Color.textColor.primary,
    },
    general: {
      color: Color.red,
    },
    tags: {
      color: Color.textColor.secondary,
    },
    selectedTags: {
      color: Color.white,
    },
  },
};
