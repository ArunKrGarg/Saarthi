import React from 'react';
import {Text} from 'react-native';
import styles from './indexCss.js';

const SFMTextView = props => {
  return (
    <Text style={[styles.SFMTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const SFRTextView = props => {
  return (
    <Text
      style={[styles.SFRTextView, styles.TextStyle, props.style]}
      {...props}>
      {props.children}
    </Text>
  );
};

const SFRITextView = props => {
  return (
    <Text style={[styles.SFRITextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const HOne = props => {
  return <Text style={[styles.H1, props.style]}>{props.children}</Text>;
};

const H2 = props => {
  return <Text style={[styles.H2, props.style]}>{props.children}</Text>;
};

const H3 = props => {
  return <Text style={[styles.H3, props.style]}>{props.children}</Text>;
};

const BodyTextView = props => {
  return <Text style={[styles.Body, props.style]}>{props.children}</Text>;
};

const QuoteTextView = props => {
  return <Text style={[styles.Quote, props.style]}>{props.children}</Text>;
};

export {
  SFMTextView,
  SFRITextView,
  SFRTextView,
  HOne,
  H2,
  H3,
  BodyTextView,
  QuoteTextView,
};
