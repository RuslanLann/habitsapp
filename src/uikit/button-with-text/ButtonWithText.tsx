import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { themeProvider } from '../../theme';
import { borderRadius, buttonHeight, buttonMarginBottom, mediumBigFontSize } from '../../theme/sizes';

interface ButtonWithText {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  type?: 'filled' | 'transparent';
  style?: ViewStyle | ViewStyle[];
}

const ButtonWithText: FC<ButtonWithText> = ({ style, title, isLoading, type = 'filled', onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'filled' && styles.buttonTypeFilled,
        isLoading && styles.buttonLoadingStyles,
        style,
      ]}
      onPress={onPress}
      disabled={isLoading}
    >
      <Text style={[styles.text, type === 'filled' && styles.textFilledType]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
  },
  buttonTypeFilled: {
    width: '100%',
    height: buttonHeight,
    marginBottom: buttonMarginBottom,
    backgroundColor: themeProvider.colors.primary,
  },
  buttonLoadingStyles: {
    opacity: 0.5,
  },
  text: {
    fontSize: mediumBigFontSize,
    color: themeProvider.colors.primary,
  },
  textFilledType: {
    color: 'white',
  },
});

export default ButtonWithText;
