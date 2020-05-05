import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';
// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;
const height = 896;
const width = 414;
export const respHp = (orientation, percentage) => {
  if (orientation == 'PORTRAIT') {
    return hp(percentage);
  } else {
    return wp(percentage);
  }
};
export const respWp = (orientation, percentage) => {
  if (orientation == 'PORTRAIT') {
    return wp(percentage);
  } else {
    return hp(percentage);
  }
};
export const getHp = pixels => {
  return hp(((pixels / height) * 100).toFixed(2));
};
export const getWp = pixels => {
  return wp(((pixels / width) * 100).toFixed(2));
};
