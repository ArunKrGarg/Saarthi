/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, Fragment, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList, Keyboard} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
//import styles from './indexCss';
import PropTypes from 'prop-types';
import {Color, FontSize} from '@constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {block, set, greaterThan, lessThan, Value, cond, sub} = Animated;

const CustomBottomSheet = props => {
  const {snapPoints} = props;
  const navigation = useNavigation();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const trans = new Value(0);
  const untraversedPos = new Value(0);
  const prevTrans = new Value(0);
  const headerPos = block([
    cond(
      lessThan(untraversedPos, sub(trans, 200)),
      set(untraversedPos, sub(trans, 200)),
    ),
    cond(greaterThan(untraversedPos, trans), set(untraversedPos, trans)),
    set(prevTrans, trans),
    untraversedPos,
  ]);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardWillShow,
    );
    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardWillHide,
    );
    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const keyboardWillShow = () => {
    setKeyboardOpen(true);
  };

  const keyboardWillHide = () => {
    setKeyboardOpen(false);
  };

  const SheetContent = () => (
    <ScrollView
      style={{
        backgroundColor: 'white',
        // height: getHp(449),
        paddingHorizontal: wp('10'),
        // paddingVertical: getHp(32),
      }}>
      <Fragment>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={() => {
            return (
              <View>
                <Text>Hello</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => `${item.studentId}_${index}`}
          snapToEnd={true}
          scrollEnabled={false}
        />
      </Fragment>
    </ScrollView>
  );

  const onOpen = () => {
    setSheetOpen(true);
  };
  const onClose = () => {
    setSheetOpen(false);
  };

  const btmSheet = useRef(null);
  // let SvgRight = sheetOpen ? ArrowDown : ArrowUp;
  let snapToPoint = 0;
  const onClickArrow = () => {
    snapToPoint = sheetOpen ? snapToPoint : 1;
    btmSheet.current.snapTo(snapToPoint);
  };

  const header = () => (
    <Animated.View
      style={{
        zIndex: 1,
        elevation: 2,
        transform: [
          {
            translateY: headerPos,
          },
        ],
      }}>
      <View
        style={{
          width: wp('100'),
          height: hp('30'),
          backgroundColor: Color.blue,
        }}></View>
    </Animated.View>
  );

  const renderInner = () => <SheetContent />;

  let bottomSheetContent = (
    <BottomSheet
      ref={btmSheet}
      contentPosition={trans}
      snapPoints={['30%', '5%', 0]}
      renderContent={renderInner}
      renderHeader={header}
      onOpenStart={onOpen}
      onCloseStart={onClose}
      enabledContentGestureInteraction={false}
    />
  );

  if (keyboardOpen) {
    bottomSheetContent = null;
  }

  return (
    <View style={styles.container}>
      {bottomSheetContent}
      {props.children}
    </View>
  );
};

const IMAGE_SIZE = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
    borderRadius: 10,
    elevation: 2,
  },
  box: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});

CustomBottomSheet.propTypes = {
  snapPoints: PropTypes.array,
};

CustomBottomSheet.defaultProps = {
  snapPoints: [hp('10'), hp('80')],
};

CustomBottomSheet.propTypes = {};

CustomBottomSheet.defaultProps = {};
export default CustomBottomSheet;
