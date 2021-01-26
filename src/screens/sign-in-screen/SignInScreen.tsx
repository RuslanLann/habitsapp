import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { responsivePixels, sizes, themeProvider } from '../../theme';
import { ButtonWithText } from '../../uikit';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email and password</Text>
      <ButtonWithText title="Sign In" isLoading={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeProvider.colors.background,
  },
  text: {
    marginBottom: 30,
    fontSize: responsivePixels.getWidthPx(24),
    fontWeight: '600',
  },
});

export default SignInScreen;
