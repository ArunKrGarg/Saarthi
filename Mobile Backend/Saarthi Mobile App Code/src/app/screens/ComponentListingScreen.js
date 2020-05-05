/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, StyleSheet, Modal} from 'react-native';
import {Toast, Icon} from 'native-base';
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
  SFMTextView,
  SFRITextView,
  SFRTextView,
  H1,
  H2,
  H3,
  BodyTextView,
  QuoteTextView,
} from '@components/TextComponents';
import {unserialize} from '../utils/Unserialize';
import {
  CustomTextInput,
  SquareButton,
  GradientButton,
  SquareIconButton,
  PhoneVerifiedDialog,
  Loader,
  CustomDropDown,
  WizardView,
  CountDownTimer,
  MenuDialog,
  WarningDialog,
  SymptomsItem,
  AlertItemView,
  SOSTimer,
} from '@components';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  Alert,
  AlertActive,
  Profile,
  Cough,
  Fever,
  Breath,
  Tiredness,
  Selfie,
  Movement,
} from '@images';
// import Toast from 'react-native-tiny-toast';

const ComponentListingScreen = props => {
  const {} = props;
  const navigation = useNavigation();
  const [showPhoneVerified, setShowPhoneVerified] = useState(false);
  const [showLoader, setshowLoader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showWarningDialog, setShowWarningDialog] = useState(false);
  const [cough, setCough] = useState(false);
  const [fever, setFever] = useState(false);
  const [breath, setBreath] = useState(false);
  const [tiredness, setTiredness] = useState(false);

  const renderTextView = () => {
    return (
      <View>
        <SFMTextView>SFMTextView</SFMTextView>
        <SFRITextView>SFRITextView</SFRITextView>
        <SFRTextView>SFRTextView</SFRTextView>
        {/* <H1>H1- Heading 1</H1>
        <H2>H2- Heading 2</H2>
        <H3>H3- Heading 3</H3> */}
        <BodyTextView>BodyTextView</BodyTextView>
        <QuoteTextView>Quote Text View</QuoteTextView>
      </View>
    );
  };

  useEffect(() => {
    let res = unserialize(
      'a:5:{s:6:"xxhdpi";s:4:"1242";s:5:"xhdpi";s:3:"768";s:4:"hdpi";s:3:"640";s:4:"mdpi";s:3:"480";s:4:"ldpi";s:3:"320";}',
    );
    console.log(JSON.stringify(res));
  }, []);

  const renderForms = () => {
    return (
      <View style={{marginTop: hp('3')}}>
        <CountDownTimer countDownInSeconds={1209600} />
        <WizardView />
        {/* <InputBox /> */}
        {/* <CustomDropDown /> */}
        <CustomTextInput
          placeholder="Enter Mobile Number"
          placeholderTextColor={Color.textColor.secondary}
          style={{fontSize: FontSize.Text16}}
          onChangeText={val => {
            console.log(val);
          }}
          keyboardType="number-pad"
          maxLength={10}
        />
        <CustomTextInput
          placeholder="Name"
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
          maxLength={10}
        />
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View style={{marginTop: hp('3')}}>
        <SOSTimer
          countDownInSeconds={10}
          onFinish={() => {
            console.warn('Timer Compled');
          }}
        />
        <View>
          <AlertItemView
            SvgIcon={Movement}
            title="Movement Detected"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam."
            onPress={() => {
              console.warn('Clicked');
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <SymptomsItem
            text="Cough"
            SvgIcon={Cough}
            value={cough}
            onChange={val => {
              console.log('Cough:', val);
              setCough(val);
            }}
          />
          <SymptomsItem
            text="Fever"
            SvgIcon={Fever}
            value={fever}
            onChange={val => {
              console.log('Fever:', val);
              setFever(val);
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: hp('2'),
          }}>
          <SymptomsItem
            text="Shortness of Breath"
            SvgIcon={Breath}
            value={breath}
            onChange={val => {
              console.log('Breath:', val);
              setBreath(val);
            }}
          />
          <SymptomsItem
            text="Tiredness"
            SvgIcon={Tiredness}
            value={tiredness}
            onChange={val => {
              console.log('Tiredness:', val);
              setTiredness(val);
            }}
          />
        </View>
        <GradientButton type="primary" width={wp('50')}>
          Register
        </GradientButton>
        <GradientButton type="secondary" width={wp('70')} height={hp('6')}>
          Cancel
        </GradientButton>
        <GradientButton
          type="primary"
          style={{width: wp('15')}}
          onPress={() => {
            setShowPhoneVerified(true);
            setshowLoader(true);
            setTimeout(() => {
              setshowLoader(false);
            }, 3000);
          }}>
          SOS
        </GradientButton>

        <SquareIconButton>Contact Helpline</SquareIconButton>

        <View>
          <OTPInputView
            style={styles.otpContainer}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            keyboardType="number-pad"
          />
        </View>
      </View>
    );
  };

  const renderMenu = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          marginTop: hp('3'),
          marginEnd: wp('5'),
        }}>
        <View>
          <AlertActive
            onPress={() => {
              setShowWarningDialog(true);
            }}
          />
        </View>
        <View>
          <Alert />
        </View>
        <View>
          <Profile
            onPress={() => {
              setShowMenu(true);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ScrollView style={{backgroundColor: Color.bg, flex: 1}}>
            {renderMenu()}
            {renderTextView()}
            {renderForms()}
            {renderButtons()}
          </ScrollView>
        </View>
        {showLoader && <PhoneVerifiedDialog />}
        {showMenu && (
          <MenuDialog
            onClose={() => {
              setShowMenu(false);
            }}
          />
        )}
        {showWarningDialog && (
          <WarningDialog
            onClose={() => {
              setShowWarningDialog(false);
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    width: '80%',
    height: hp('12'),
    alignSelf: 'center',
    marginEnd: wp('5'),
  },
  underlineStyleBase: {
    width: wp('15'),
    marginStart: wp('3'),
    height: hp('10'),
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.white,
    borderBottomWidth: 1,
    color: Color.primary,
    borderRadius: wp('3'),
    fontFamily: 'SFProDisplay-Medium',
    fontSize: FontSize.Text20,
  },

  underlineStyleHighLighted: {
    borderColor: Color.white,
  },
});

ComponentListingScreen.propTypes = {};

ComponentListingScreen.defaultProps = {};
export default ComponentListingScreen;
