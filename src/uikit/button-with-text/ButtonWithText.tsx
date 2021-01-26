import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { responsivePixels, sizes, themeProvider } from '../../theme';

interface IButtonWithText {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  type?: 'filled' | 'transparent';
}

const ButtonWithText: FC<IButtonWithText> = ({ title, isLoading, type = 'filled', onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'filled' && styles.buttonTypeFilled, isLoading && styles.buttonLoadingStyles]}
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
    borderRadius: sizes.borderRadius,
  },
  buttonTypeFilled: {
    width: '100%',
    height: responsivePixels.getHeightPx(40),
    marginBottom: responsivePixels.getHeightPx(15),
    backgroundColor: themeProvider.colors.primary,
  },
  buttonLoadingStyles: {
    opacity: 0.5,
  },
  text: {
    fontSize: responsivePixels.getWidthPx(18),
    color: themeProvider.colors.primary,
  },
  textFilledType: {
    color: 'white',
  },
});

export default ButtonWithText;
