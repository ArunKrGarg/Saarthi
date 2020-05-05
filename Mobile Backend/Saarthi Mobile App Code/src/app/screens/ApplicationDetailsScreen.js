/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
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
  AlertItemView,
} from '@components';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import {Thumbnail, Icon} from 'native-base';
import {HOne, H2, SFMTextView, SFRITextView} from '@components/TextComponents';
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
import {APPROVAL_LIST} from '@data';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const ApplicationDetailsScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [showSuccessDialog, setshowSuccessDialog] = useState(false);
  const [data, setdata] = useState(APPROVAL_LIST[0]);
  const [userType, setuserType] = useState('bank');
  const [showRejectDialog, setshowRejectDialog] = useState(false);
  const {appStore} = useStores();

  useEffect(() => {
    setdata(appStore.selectedFarmer);
  }, []);

  const renderAlertItem = data => {
    let image = Notification;
    //console.log(JSON.stringify(data));
    if (data.mapper_type == 'TAKE_SELFIE') {
      image = Selfie;
    }
    return (
      <View>
        <AlertItemView
          data={data.item}
          type={data.mapper_type}
          SvgIcon={image}
          date={data.updated_on}
          title={data.title}
          description={data.body}
          onPress={val => {}}
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
            marginEnd: wp('0'),
            marginTop: hp('2'),
            marginBottom: hp('2'),
          }}>
          <View style={{flex: 0.3}}>
            <Back
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <HOne>Application Details</HOne>
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
          isRejected={false}
          info={appStore.userData.success2}
          title={appStore.userData.success1}
          onClose={() => {
            setshowSuccessDialog(false);
          }}
        />
      );
    }
  };

  const rejectDialog = () => {
    if (showRejectDialog) {
      return (
        <SuccessDialog
          isRejected={true}
          title="Rejected"
          info={
            appStore.userData.type == 'bank'
              ? 'Loan has been Rejected'
              : 'Digital Contract has been rejected'
          }
          onClose={() => {
            setshowRejectDialog(false);
          }}
        />
      );
    }
  };

  const ItemRow = (label, value, iconName, iconType) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{flex: 0.2, marginStart: wp('5')}}>
          <Icon
            name={iconName ? iconName : 'home'}
            type={iconType ? iconType : ''}
            style={{
              fontSize: hp('2.5'),
              width: hp('2.5'),
              marginTop: hp('0.5'),
              height: hp('2.5'),
              justifyContent: 'center',
              alignItems: 'center',
              color: Color.primary,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <SFMTextView style={styles.itemLabel}>{label}</SFMTextView>
        </View>
        <View style={{flex: 1}}>
          <SFMTextView style={styles.itemVal}>{value}</SFMTextView>
        </View>
      </View>
    );
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
            <View
              style={{
                backgroundColor: Color.bg,
                width: wp('90'),
                marginTop: hp('3'),
                marginBottom: hp('3'),
                flex: 1,
                borderRadius: wp('5'),
                alignSelf: 'center',
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  margin: hp('3'),
                }}>
                <Thumbnail source={{uri: data.image}} large />
                <SFMTextView
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: hp('0.3'),
                  }}>
                  {data.name}
                </SFMTextView>
                <SFMTextView style={{fontWeight: 'normal'}}>
                  {data.phone}
                </SFMTextView>
              </View>
              <View
                style={{
                  paddingBottom: hp('2'),
                  borderRadius: wp('5'),
                  alignItems: 'center',
                }}>
                {ItemRow(
                  'Warehouse',
                  data.warehouse,
                  'office-building',
                  'MaterialCommunityIcons',
                )}
                {ItemRow(
                  'Credit Score',
                  data.credit_score,
                  'confirmation-number',
                  'MaterialIcons',
                )}
                {ItemRow('Location', data.location, 'location-pin', 'Entypo')}
                {ItemRow('Rate', data.rate, 'price-tag', 'Entypo')}
                {ItemRow('Loan Type', data.loan_type, 'money', 'FontAwesome')}
                {ItemRow(
                  'Application Type',
                  data.application_type,
                  'application',
                  'MaterialCommunityIcons',
                )}
                {ItemRow('Packets', data.packets, 'list-number', 'Foundation')}
                {ItemRow(
                  'Crop Quality',
                  data.crop_quality,
                  'star',
                  'AntDesign',
                )}
                <View style={{flexDirection: 'row', marginTop: hp('1')}}>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fakeid.co.uk%2Fmedia%2Fcatalog%2Fproduct%2Foptimized%2F2%2Fc%2F2c194680c762691b55b07a9b860259f3%2Ff1_d_1.png&f=1&nofb=1',
                    }}
                  />
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fidcardservices.co.uk%2Fwp-content%2Fuploads%2F2012%2F10%2FCard-setup-18.png&f=1&nofb=1',
                    }}
                    style={{marginStart: wp('5')}}
                  />
                </View>
                <CustomTextInput
                  placeholder="Approve/Reject Reason"
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
              </View>
              <View style={{}} />
              <View
                style={{position: 'absolute', top: hp('2'), right: wp('0')}}>
                <SFRITextView
                  style={{
                    fontStyle: 'italic',
                    marginEnd: wp('5'),
                    fontSize: FontSize.Text12,
                    color: Color.secondary,
                  }}>
                  {data.date}
                </SFRITextView>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <GradientButton
                  type="primary"
                  width={wp('30')}
                  height={hp('4')}
                  onPress={() => {
                    setshowSuccessDialog(true);
                  }}>
                  Approve
                </GradientButton>

                <GradientButton
                  type="secondary"
                  width={wp('30')}
                  height={hp('4')}
                  onPress={() => {
                    setshowRejectDialog(true);
                  }}>
                  Reject
                </GradientButton>
              </View>
            </View>
          </View>
        </View>
        {successDialog()}
        {rejectDialog()}
      </SafeAreaView>
    </>
  );
};
// id: '1',
// name: 'Sattpal',
// image: 'https://randomuser.me/api/portraits/men/63.jpg',
// date: '23/04/2020',
// warehouse: 'Prabhat',
// rate: '3%',
// location: 'Hapur, UP West',
// loan_type: '101',
// application_type: 'Post Harvent',
// packets: '10000',
// crop_quality: 'Medium',
// phone: '787372762',
// email: 'farmer1@gmail.com',
// status: 'new',
// credit_score: '435',
// documents: [
//   'https://image.flaticon.com/icons/svg/1086/1086563.svg',
//   'https://image.flaticon.com/icons/svg/1086/1086452.svg',
// ],
ApplicationDetailsScreen.propTypes = {};

ApplicationDetailsScreen.defaultProps = {};

const styles = StyleSheet.create({
  itemLabel: {
    fontWeight: 'normal',
    marginTop: hp('1'),
    textAlign: 'left',
  },
  itemVal: {
    fontWeight: 'normal',
    marginTop: hp('1'),
    textAlign: 'left',
  },
});
export default ApplicationDetailsScreen;
