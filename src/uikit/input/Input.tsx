import React, { FC } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

import { themeProvider } from '../../theme';
import { buttonHeight, buttonMarginBottom, mediumBigFontSize, minPadding } from '../../theme/sizes';

interface Input extends TextInputProps {}

const Input: FC<Input> = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: buttonHeight,
    marginBottom: buttonMarginBottom,
    padding: minPadding,
    fontSize: mediumBigFontSize,
    borderBottomColor: themeProvider.colors.border,
    borderBottomWidth: 1,
  },
});

export default Input;
