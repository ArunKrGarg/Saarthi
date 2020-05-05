/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';
import {SFMTextView} from '@components/TextComponents';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Completed} from '@images';

const WizardView = props => {
  const {info, bankSelection, review, onPress} = props;
  const navigation = useNavigation();
  const inProgressColor = [Color.button.g1, Color.button.g2, Color.button.g3];
  const completedColor = [Color.green, Color.green, Color.green];
  const notStartedColor = [Color.border, Color.border, Color.border];

  let infoColor =
    info == 'completed'
      ? completedColor
      : info == 'inprogress'
      ? inProgressColor
      : notStartedColor;

  let bankSelectionColor =
    bankSelection == 'completed'
      ? completedColor
      : bankSelection == 'inprogress'
      ? inProgressColor
      : notStartedColor;

  let reviewColor =
    review == 'completed'
      ? completedColor
      : review == 'inprogress'
      ? inProgressColor
      : notStartedColor;

  return (
    <>
      <View
        style={{
          marginBottom: hp('5'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: hp('2'),
            marginBottom: hp('2'),
            marginStart: wp('5'),
            marginEnd: wp('5'),
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                onPress('info');
              }}>
              <LinearGradient
                useAngle={true}
                angle={162}
                colors={infoColor}
                style={{...styles.linearGradient, ...props.style}}>
                {info == 'completed' ? (
                  <Completed
                    width={wp('3')}
                    onPress={() => {
                      onPress('info');
                    }}
                  />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp('35'),
              height: wp('0.2'),
              backgroundColor: Color.border,
            }}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                onPress('bankSelection');
              }}>
              <LinearGradient
                key="bankSelection"
                useAngle={true}
                angle={162}
                colors={bankSelectionColor}
                style={{...styles.linearGradient, ...props.style}}>
                {bankSelection == 'completed' ? (
                  <Completed
                    width={wp('3')}
                    onPress={() => {
                      onPress('bank');
                    }}
                  />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: wp('35'),
              height: wp('0.2'),
              backgroundColor: Color.border,
            }}
          />
          <View>
            <TouchableOpacity
              onPress={() => {
                onPress('review');
              }}>
              <LinearGradient
                useAngle={true}
                angle={162}
                colors={reviewColor}
                style={{...styles.linearGradient, ...props.style}}>
                {review == 'completed' ? (
                  <Completed
                    width={wp('3')}
                    onPress={() => {
                      onPress('review');
                    }}
                  />
                ) : null}
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginEnd: wp('2'),
            marginStart: wp('2'),
          }}>
          <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => {
                onPress('info');
              }}>
              <SFMTextView
                style={{
                  textAlign: 'center',
                }}>
                {'Loan\nDetails'}
              </SFMTextView>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => {
                onPress('bank');
              }}>
              <SFMTextView
                style={{
                  textAlign: 'center',
                }}>
                {'Bank\nSelection'}
              </SFMTextView>
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                onPress('review');
              }}>
              <SFMTextView
                style={{
                  textAlign: 'center',
                }}>
                {'Review\nDetails'}
              </SFMTextView>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

WizardView.propTypes = {};

WizardView.defaultProps = {
  address: 'completed',
  contact: 'inprogress',
  quarantine: 'notstarted',
};
export default WizardView;
