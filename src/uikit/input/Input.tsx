import React, { FC } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { sizes, themeProvider } from '../../theme';

interface Input extends TextInputProps {}

const Input: FC<Input> = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: sizes.buttonHeight,
    marginBottom: sizes.buttonMarginBottom,
    padding: sizes.padding,
    fontSize: sizes.mediumBigFontSize,
    borderBottomColor: themeProvider.colors.border,
    borderBottomWidth: 1,
  },
});

export default Input;
