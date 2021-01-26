import React, { FC } from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';

interface IText extends TextProps {}

const Text: FC<IText> = ({ style, ...props }) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      Enter your name, email and set password
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {},
});

export default Text;
