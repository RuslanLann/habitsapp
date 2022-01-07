import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { themeProvider } from '../../theme';
import { ButtonWithText, Input } from '../../uikit';
import { largeFontSize, largeVerticalMargin, minPadding } from '../../theme/sizes';

interface SignInScreenProps extends StackScreenProps<any> {}

export const SignInScreen: FC<SignInScreenProps> = ({ navigation }) => {
  const onSignInPress = () => {};

  const onSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email and password</Text>
      <Input placeholder="email" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" />
      <Input placeholder="password" textContentType="password" autoCapitalize="none" secureTextEntry={true} />
      <ButtonWithText title="Sign In" isLoading={false} onPress={onSignInPress} style={styles.buttonStyle} />
      <ButtonWithText title="Sign Up" isLoading={false} onPress={onSignUpPress} type="transparent" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: minPadding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeProvider.colors.background,
  },
  title: {
    marginBottom: largeVerticalMargin,
    fontSize: largeFontSize,
    fontWeight: '600',
  },
  buttonStyle: {
    marginTop: largeVerticalMargin,
  },
});
