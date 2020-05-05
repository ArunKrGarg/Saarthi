/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  WizardView,
  CustomTextInput,
  GradientButton,
  CustomDropDown,
  Loader,
  SuccessDialog,
  HistoryItemView,
  AlertItemView,
} from '@components';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import {Thumbnail} from 'native-base';
import {HOne, H2, SFMTextView, SFRTextView} from '@components/TextComponents';
import {
  Movement,
  EmptyItems,
  Notification,
  Selfie,
  Back,
  DateSvg,
  CounterSvg,
} from '@images';
import {FlatList} from 'react-native-gesture-handler';
import {HISTORY_LIST} from '@data';

const HistoryScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [showSuccessDialog, setshowSuccessDialog] = useState(false);
  const {appStore} = useStores();

  const renderAlertItem = data => {
    let image = Notification;

    //console.log(JSON.stringify(data));
    if (data.mapper_type == 'TAKE_SELFIE') {
      image = Selfie;
    }
    return (
      <View>
        <HistoryItemView
          data={data.item}
          type={data.mapper_type}
          SvgIcon={image}
          date={data.updated_on}
          title={data.title}
          description={data.body}
          onPress={val => {
            if (appStore.userData.type == 'farmer') {
              props.navigation.navigate('RepayScreen');
            }
            //props.navigation.navigate('ApplicationDetailsScreen');
          }}
        />
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginStart: wp('5'),
            marginEnd: wp('5'),
            marginTop: hp('2'),
            marginBottom: hp('2'),
          }}>
          <View style={{flex: 0.7}}>
            <Back
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <HOne>History</HOne>
          </View>
          <View style={{flex: 0.5}} />
        </View>
      </View>
    );
  };

  const successDialog = () => {
    if (showSuccessDialog) {
      return (
        <SuccessDialog
          info="Waiting for digital contract approval. You will be notified soon."
          onClose={() => {
            setshowSuccessDialog(false);
          }}
        />
      );
    }
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: Color.bg}}>
          {renderHeader()}
          <View
            style={{
              backgroundColor: Color.white,
              borderTopLeftRadius: wp('5'),
              flex: 1,
              marginTop: hp('0'),
              borderTopRightRadius: wp('5'),
            }}>
            <FlatList
              data={appStore.userData.history}
              contentContainerStyle={{marginTop: hp('2')}}
              renderItem={renderAlertItem}
            />
          </View>
        </View>
        {successDialog()}
      </SafeAreaView>
    </>
  );
};

HistoryScreen.propTypes = {};

HistoryScreen.defaultProps = {};
export default observer(HistoryScreen);
