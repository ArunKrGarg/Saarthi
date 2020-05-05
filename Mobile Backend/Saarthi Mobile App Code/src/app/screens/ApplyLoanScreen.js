/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, Platform, ToastAndroid, StyleSheet} from 'react-native';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Back, DateSvg, CounterSvg} from '@images';
import {HOne, H2, SFMTextView} from '@components/TextComponents';
import {
  WizardView,
  CustomTextInput,
  GradientButton,
  CustomDropDown,
  Loader,
  SuccessDialog,
} from '@components';
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StackActions, CommonActions} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';
import {runInAction} from 'mobx';
import Orientation from 'react-native-orientation';
import {Picker, Icon} from 'native-base';
import {unserialize} from '../utils/Unserialize';
const moment = require('moment');
import ImagePicker from 'react-native-image-picker';
import {Thumbnail} from 'native-base';
import {BANK_LIST} from '@data';
import {SFRTextView} from '@components/TextComponents';

const ApplyLoanScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [currentPage, setCurrentPage] = useState('info');
  const [infoState, setInfoState] = useState('inprogress');
  const [bankState, setBankState] = useState('notstarted');
  const [reviewState, setReviewState] = useState('notstarted');
  const [avatarSource, setSvatarSource] = useState();
  const [selectedBank, setselectedBank] = useState(-1);
  const [showSuccessDialog, setshowSuccessDialog] = useState(false);
  const {appStore} = useStores();

  const options = {
    title: 'Select Profile Image',
    customButtons: [{name: 'fashion_ecommerce', title: 'Choose Photo'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const showImagePickerDialog = async () => {
    ImagePicker.showImagePicker(options, response => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setSvatarSource(source);
      }
    });

    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // console.log(result);

    // if (!result.cancelled) {
    //   const source = { uri: result.uri };
    //   // You can also display the image using data:
    //   // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    //   setSvatarSource(source);
    // }
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
                props.navigation.replace('FarmerHomeScreen');
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <HOne>Apply Loan</HOne>
          </View>
          <View style={{flex: 0.5}} />
        </View>
        <View>
          <WizardView
            info={infoState}
            bankSelection={bankState}
            review={reviewState}
            onPress={val => {
              console.warn('YOYO:', val);
              if (val == 'info' && infoState != 'notstarted') {
                setCurrentPage('info');
              } else if (val == 'bank' && bankState != 'notstarted') {
                setCurrentPage('bank');
              } else if (val == 'review' && reviewState != 'notstarted') {
                setCurrentPage('review');
              }
            }}
          />
        </View>
      </View>
    );
  };

  const renderInfo = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{alignSelf: 'center', marginTop: hp('2')}}>
          <H2>Loan Details</H2>
        </View>
        <ScrollView>
          <View
            key="form"
            style={{
              alignSelf: 'center',
              alignItems: 'center',
            }}>
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
                  placeholder="Select Timeframe"
                  placeholderStyle={{color: Color.secondary}}
                  onValueChange={(value, index) => {}}>
                  {appStore.config.timeframes.map(item => {
                    let item1 = `${item} Month`;
                    return <Picker.Item label={item1} value={item1} />;
                  })}
                </Picker>
              </View>
            </View>

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
                  placeholder="Select Warehouse"
                  placeholderStyle={{color: Color.secondary}}
                  onValueChange={val => {
                    console.log(val);
                  }}>
                  {appStore.config.warehouses.map(item => {
                    <Picker.Item label={item.name} value={item.name} />;
                  })}
                </Picker>
              </View>
            </View>

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
                  placeholder="Reason for Loan Application"
                  placeholderStyle={{color: Color.secondary}}
                  onValueChange={val => {
                    console.log(val);
                  }}>
                  {appStore.config.reasonsForLoan.map(item => {
                    return <Picker.Item label={item} value={item} />;
                  })}
                </Picker>
              </View>
            </View>

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
                  placeholder="Choose Installments for repayment"
                  placeholderStyle={{color: Color.secondary}}
                  onValueChange={val => {
                    console.log(val);
                  }}>
                  {appStore.config.installments.map(item => {
                    return <Picker.Item label={item} value={item} />;
                  })}
                </Picker>
              </View>
            </View>

            <CustomTextInput
              placeholder="Additional Details"
              placeholderTextColor={Color.textColor.secondary}
              style={{
                fontSize: FontSize.Text16,
                borderColor: Color.border,
                marginTop: hp('2'),
              }}
              onChangeText={val => {
                console.log(val);
              }}
              keyboardType="default"
              multiline={false}
              returnKeyType="done"
            />

            <View key="container" style={styles.container}>
              <View>
                <Thumbnail
                  key="thumbnail"
                  source={avatarSource}
                  large
                  square
                  style={styles.thumbnail}
                />

                <View key="plusIconContainer" style={styles.plusIconContainer}>
                  <Icon
                    key="plusIcon"
                    onPress={showImagePickerDialog}
                    name="plus"
                    type="Entypo"
                    style={styles.plusIcon}
                  />
                </View>
              </View>
            </View>

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
                  setCurrentPage('bank');
                  setInfoState('completed');
                  setBankState('inprogress');
                }}>
                Next
              </GradientButton>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  const renderReview = () => {
    return (
      <>
        <View style={{flex: 1}}>
          <View style={{alignSelf: 'center', marginTop: hp('2')}}>
            <H2>Review Details</H2>
          </View>
          <ScrollView>
            <View
              key="form"
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: hp('3'),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-around',
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView>Amount Requested</SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>10000</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Warehouse
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>Warehouse 119</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Time Frame
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>2 years</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Reason For Loan
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>Crop Harvest</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginStart: wp('0'),
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Type of Repayment
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>Quaterly</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginStart: wp('0'),
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Additional Details
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>NA</SFMTextView>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: hp('1'),
                  justifyContent: 'space-around',
                  marginStart: wp('0'),
                  marginEnd: wp('0'),
                }}>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <SFMTextView style={{fontWeight: 'bold'}}>
                    Selected Bank
                  </SFMTextView>
                </View>
                <View
                  style={{
                    flex: 1,
                    marginStart: wp('5'),
                    alignItems: 'flex-start',
                  }}>
                  <SFMTextView>
                    HDFC, Bangalore, Hebbal for 4% interest
                  </SFMTextView>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: hp('3'),
            alignSelf: 'center',
            position: 'absolute',
            bottom: hp('0'),
          }}>
          <GradientButton
            type="primary"
            width={wp('90')}
            height={hp('6')}
            onPress={() => {
              setCurrentPage('review');
              setInfoState('completed');
              setBankState('completed');
              setReviewState('completed');
              setshowSuccessDialog(true);
            }}>
            Apply Loan
          </GradientButton>
        </View>
      </>
    );
  };

  const renderBankItem = data => {
    let borderColor = Color.secondary;
    let isSelected = data.index == selectedBank ? true : false;
    if (isSelected) {
      borderColor = Color.red;
    }
    return (
      <>
        <View
          style={{
            alignSelf: 'center',
            width: wp('90'),
            marginTop: hp('2'),
            backgroundColor: Color.white,
            borderRadius: wp('3'),
            borderColor: borderColor,
            borderWidth: isSelected ? 3 : 1,
            padding: wp('2'),
            marginStart: wp('5'),
            marginEnd: wp('5'),
            flexDirection: 'column',
          }}>
          <TouchableOpacity
            onPress={() => {
              setselectedBank(data.index);
            }}>
            <View style={{flexDirection: 'row'}}>
              <Thumbnail square source={{uri: data.item.image}} />
              <View style={{marginStart: wp('5')}}>
                <SFRTextView>{data.item.name}</SFRTextView>
                <SFRTextView>{data.item.location.street}</SFRTextView>
                <SFRTextView>{data.item.location.city}</SFRTextView>
              </View>
            </View>
            <View style={{marginTop: hp('1')}}>
              <SFRTextView>
                {'Interest Rate: ' + data.item.interestRate}
              </SFRTextView>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderBank = () => {
    return (
      <>
        <View style={{}}>
          <View
            style={{
              alignSelf: 'center',
              marginTop: hp('2'),
            }}>
            <View sstyle={{alignItems: 'center', justifyContent: 'center'}}>
              <H2 style={{textAlign: 'center'}}>Select Bank</H2>
            </View>
            <View style={{height: hp('55')}}>
              <FlatList
                data={appStore.config.banks}
                scrollEnabled={true}
                renderItem={renderBankItem}
                contentContainerStyle={{}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: hp('3'),
            alignSelf: 'center',
            position: 'absolute',
            bottom: hp('0'),
          }}>
          <GradientButton
            type="primary"
            width={wp('90')}
            height={hp('6')}
            onPress={() => {
              setCurrentPage('review');
              setInfoState('completed');
              setBankState('completed');
              setReviewState('inprogress');
            }}>
            Next
          </GradientButton>
        </View>
      </>
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
            {currentPage == 'info' ? renderInfo() : null}
            {currentPage == 'bank' ? renderBank() : null}
            {currentPage == 'review' ? renderReview() : null}
          </View>
        </View>
        {successDialog()}
      </SafeAreaView>
    </>
  );
};

ApplyLoanScreen.propTypes = {};

ApplyLoanScreen.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('3'),
  },
  thumbnail: {
    backgroundColor: Color.light.blue,
    borderColor: Color.white,
    borderWidth: wp('0.2'),
    height: wp('15'),
    width: wp('15'),
  },
  plusIconContainer: {
    backgroundColor: Color.white,
    borderRadius: wp('5'),
    elevation: 2,
    zIndex: 5,
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: wp('5'),
    height: wp('5'),
  },
  plusIcon: {
    color: Color.darknavy,
    fontSize: wp('5'),
  },
});
export default observer(ApplyLoanScreen);
