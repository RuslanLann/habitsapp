import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { sizes, themeProvider } from '../../theme';
import { ButtonWithText, Input } from '../../uikit';

interface SignUpScreen extends StackScreenProps<any> {}

const SignUpScreen: FC<SignUpScreen> = ({ navigation }) => {
  const onSignUpPress = () => {};

  const onBackPress = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name, email and set password</Text>
      <Input placeholder="name" />
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
      <ButtonWithText style={styles.buttonStyle} onPress={onSignUpPress} title="Sign Up" isLoading={false} />
      <ButtonWithText title="Back" isLoading={false} onPress={onBackPress} type="transparent" />
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
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: sizes.largeVerticalMargin,
  },
});

export default SignUpScreen;
