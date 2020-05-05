import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar, ToastAndroid} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Back} from '@images';
import {HOne} from '@components/TextComponents';
import {
  CustomTextInput,
  GradientButton,
  Loader,
  ToastDialog,
  SymptomsItem,
} from '@components';
import Orientation from 'react-native-orientation';
import {VerifyMobileApi, ConfigApi, ProfileApi} from '@api';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import {Toast} from 'native-base';
import LottieView from 'lottie-react-native';
import {getDeviceDetails, getAsValue, setAsValue} from '@utils';
import {v4 as uuidv4} from 'uuid';
import {bank_building, farmer2, small_business} from '@images';

const UserSelectionScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  let heading = 'Select, \nChoose your profile!';
  const [selected, setselected] = useState('');
  const {appStore} = useStores();
  return (
    <>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content" />
      <SafeAreaView>
        <View style={{backgroundColor: Color.bg}}>
          <View style={{marginTop: hp('2'), marginStart: wp('5')}}>
            {/* <Back /> */}
          </View>
          <View
            style={{
              marginStart: wp('5'),
              marginEnd: wp('5'),
              marginTop: hp('5'),
            }}>
            <HOne>{heading}</HOne>
            <View style={{marginTop: hp('2'), alignSelf: 'center'}}>
              <SymptomsItem
                image={farmer2}
                isSelected={selected == 'Farmer' ? true : false}
                text="Farmer"
                onPress={() => {
                  runInAction(() => {
                    appStore.username = 'farmer@gmail.com';
                  });
                  setselected('Farmer');
                }}
              />
              <SymptomsItem
                image={bank_building}
                isSelected={selected == 'Banker' ? true : false}
                text="Banker"
                onPress={() => {
                  runInAction(() => {
                    appStore.username = 'banker@gmail.com';
                  });
                  setselected('Banker');
                }}
              />
              <SymptomsItem
                image={small_business}
                text="Cold Storage Owner"
                isSelected={selected == 'Cold Storage Owner' ? true : false}
                onPress={() => {
                  runInAction(() => {
                    appStore.username = 'coldstorage@gmail.com';
                  });
                  setselected('Cold Storage Owner');
                }}
              />
            </View>
            <View>
              <GradientButton
                type="primary"
                width={wp('90')}
                height={hp('7')}
                onPress={() => {
                  props.navigation.navigate('LoginScreen', {type: selected});
                }}>
                Login
              </GradientButton>
            </View>
          </View>
        </View>
        <Loader />
        <ToastDialog isVisible={false} message="" isError={true} />
      </SafeAreaView>
    </>
  );
};

UserSelectionScreen.propTypes = {};

UserSelectionScreen.defaultProps = {};
export default UserSelectionScreen;
