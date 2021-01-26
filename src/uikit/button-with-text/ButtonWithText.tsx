import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { responsivePixels, sizes, themeProvider } from '../../theme';

interface IButtonWithText {
  title: string;
  isLoading: boolean;
}

const ButtonWithText: FC<IButtonWithText> = ({ title, isLoading }) => {
  return (
    <TouchableOpacity style={[styles.button, isLoading && styles.buttonLoadingStyles]} disabled={isLoading}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: responsivePixels.getHeightPx(40),
    backgroundColor: themeProvider.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.borderRadius,
  },
  buttonLoadingStyles: {
    opacity: 0.5,
  },
  text: {
    fontSize: responsivePixels.getWidthPx(16),
    color: 'white',
  },
});

export default ButtonWithText;
