/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Picker, Icon, Toast} from 'native-base';
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
import {useStores} from '@mobx/hooks';
import {observer} from 'mobx-react';
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

const RepayScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [showSuccessDialog, setshowSuccessDialog] = useState(false);
  const {appStore} = useStores();

  useEffect(() => {
    console.log('-----------' + JSON.stringify(appStore.userData.loan));
  }, []);

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
            <HOne>Repayment</HOne>
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
          title={appStore.userData.success1}
          info={appStore.userData.success2}
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
            <ScrollView>
              <View
                key="form"
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <View style={{marginTop: hp('2')}}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: Color.border,
                      borderRadius: wp('3'),
                      width: wp('80 '),
                      backgroundColor: Color.white,
                    }}>
                    <Picker
                      mode="dropdown"
                      style={{
                        width: wp('80'),
                        color: Color.primary,
                      }}
                      placeholder="Select Loan"
                      placeholderStyle={{color: Color.secondary}}
                      onValueChange={(value, index) => {}}>
                      {appStore.userData.loan.map(item => {
                        return <Picker.Item label={item} value={item} />;
                      })}
                    </Picker>
                  </View>
                </View>
                <CustomTextInput
                  placeholder="Enter Amount"
                  placeholderTextColor={Color.textColor.secondary}
                  style={{
                    fontSize: FontSize.Text16,
                    borderColor: Color.border,
                    marginTop: hp('2'),
                  }}
                  onChangeText={val => {
                    console.log(val);
                    runInAction(() => {});
                  }}
                  keyboardType="decimal-pad"
                  multiline={false}
                  returnKeyType="done"
                />
                <CustomTextInput
                  placeholder="Comments"
                  placeholderTextColor={Color.textColor.secondary}
                  style={{
                    fontSize: FontSize.Text16,
                    borderColor: Color.border,
                    marginTop: hp('2'),
                  }}
                  onChangeText={val => {
                    console.log(val);
                    runInAction(() => {});
                  }}
                  keyboardType="default"
                  multiline={false}
                  returnKeyType="done"
                />
                <View
                  style={{
                    marginTop: hp('3'),
                    alignSelf: 'center',
                  }}>
                  <GradientButton
                    type="primary"
                    width={wp('90')}
                    height={hp('6')}
                    onPress={() => {
                      setshowSuccessDialog(true);
                    }}>
                    Pay Using UPI
                  </GradientButton>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        {successDialog()}
      </SafeAreaView>
    </>
  );
};

RepayScreen.propTypes = {};

RepayScreen.defaultProps = {};
export default observer(RepayScreen);
