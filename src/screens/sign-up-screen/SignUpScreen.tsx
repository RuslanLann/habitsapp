import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { themeProvider } from '../../theme';
import { largeFontSize, largeVerticalMargin, minPadding } from '../../theme/sizes';
import { ButtonWithText, Input } from '../../uikit';

interface SignUpScreenProps extends StackScreenProps<any> {}

export const SignUpScreen: FC<SignUpScreenProps> = ({ navigation }) => {
  const onSignUpPress = () => {};

  const onBackPress = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name, email and set password</Text>
      <Input placeholder="name" />
      <Input placeholder="email" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" />
      <Input placeholder="password" textContentType="password" autoCapitalize="none" secureTextEntry={true} />
      <ButtonWithText style={styles.buttonStyle} onPress={onSignUpPress} title="Sign Up" isLoading={false} />
      <ButtonWithText title="Back" isLoading={false} onPress={onBackPress} type="transparent" />
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
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: largeVerticalMargin,
  },
});
