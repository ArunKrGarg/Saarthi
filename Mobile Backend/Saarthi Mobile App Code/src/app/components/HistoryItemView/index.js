/* eslint-disable react-native/no-inline-styles */
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
import {
  SFRTextView,
  SFRITextView,
  SFMTextView,
} from '@components/TextComponents';
import {Thumbnail} from 'native-base';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  Movement,
  EmptyItems,
  Notification,
  Selfie,
  Back,
  DateSvg,
  CounterSvg,
} from '@images';
import {GradientButton} from '@components';

const HistoryItemView = props => {
  const {SvgIcon, title, description, date, onPress, data} = props;
  const navigation = useNavigation();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            backgroundColor: Color.bg,
            width: wp('80'),
            marginBottom: hp('3'),
            borderRadius: wp('5'),
            alignSelf: 'center',
          }}>
          <View
            style={{
              paddingBottom: hp('2'),
              borderRadius: wp('5'),
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                marginStart: wp('0'),
                justifyContent: 'center',
              }}>
              <Thumbnail source={{uri: data.image}} large />
            </View>
            <View style={{marginTop: hp('2'), marginStart: wp('2')}}>
              <SFMTextView style={{width: wp('50'), fontWeight: 'bold'}}>
                {data.name}
              </SFMTextView>
              <SFMTextView style={{width: wp('50'), fontWeight: 'normal'}}>
                {'Warehouse: ' + data.warehouse}
              </SFMTextView>
              <SFMTextView style={{width: wp('50'), fontWeight: 'normal'}}>
                {'Phone: ' + data.phone}
              </SFMTextView>
              <SFMTextView style={{width: wp('50'), fontWeight: 'normal'}}>
                {'Credit score: ' + data.credit_score}
              </SFMTextView>
              {data.reason.length > 0 ? (
                <SFMTextView
                  style={{
                    width: wp('50'),
                    fontWeight: 'normal',
                    color: Color.red,
                  }}>
                  {'Reason: ' + data.reason}
                </SFMTextView>
              ) : null}

              <GradientButton
                type={data.status}
                width={wp('40')}
                height={hp('4')}
                onPress={() => {
                  onPress();
                }}>
                {data.status.toUpperCase()}
              </GradientButton>
            </View>
          </View>
          <View style={{position: 'absolute', top: hp('2'), right: wp('0')}}>
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
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

HistoryItemView.propTypes = {};

HistoryItemView.defaultProps = {
  title: 'Title',
  date: '20 mins ago',
  description: 'Description comes here',
  SvgIcon: Selfie,
};
export default HistoryItemView;
