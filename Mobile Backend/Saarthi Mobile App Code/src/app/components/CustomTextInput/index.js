import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './indexCss';
import {Color} from '@constants';
import PropTypes from 'prop-types';

const CustomTextInput = props => {
  const {inputStyle, input} = props;
  let bdrColor = null;
  const {isError} = props;
  if (isError) {
    bdrColor = {borderColor: Color.red};
  }
  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.style, ...bdrColor}}
    />
  );
};

CustomTextInput.propTypes = {
  styles: PropTypes.object,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export default CustomTextInput;
