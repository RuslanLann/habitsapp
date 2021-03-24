import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { responsivePixels, sizes, themeProvider } from '../../theme';
import { ButtonWithText, Input } from '../../uikit';

interface ISignInScreen extends StackScreenProps<any> {}

const SignInScreen: FC<ISignInScreen> = ({ navigation }) => {
  const onSignInPress = () => {};

  const onSignUpPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email and password</Text>
      <Input
        placeholder="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="off"
      />
      <Input
        placeholder="password"
        textContentType="password"
        autoCapitalize="none"
        autoCompleteType="off"
        secureTextEntry={true}
      />
      <ButtonWithText title="Sign In" isLoading={false} onPress={onSignInPress} style={styles.buttonStyle} />
      <ButtonWithText title="Sign Up" isLoading={false} onPress={onSignUpPress} type="transparent" />
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
  title: {
    marginBottom: sizes.largeVerticalMargin,
    fontSize: sizes.largeFontSize,
    fontWeight: '600',
  },
  buttonStyle: {
    marginTop: sizes.largeVerticalMargin,
  },
});

export default SignInScreen;
