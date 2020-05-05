import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './indexCss';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import {observer} from 'mobx-react';
import {useStores} from '@mobx/hooks';

const Loader = props => {
  const {loginStore} = useStores();
  return (
    <View>
      <Modal
        isVisible={loginStore.isLoading}
        animationIn="slideInLeft"
        animationOut="slideInLeft">
        <View style={styles.container}>
          <View style={styles.lottieContainer}>
            <LottieView
              source={require('../../../../assets/images/loading.json')}
              autoPlay={true}
              loop={true}
              resizeMode="cover"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

Loader.propTypes = {};

Loader.defaultProps = {};

export default Loader;
