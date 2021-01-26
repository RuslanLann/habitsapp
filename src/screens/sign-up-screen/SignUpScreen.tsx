import { StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { responsivePixels, sizes, themeProvider } from '../../theme';
import { ButtonWithText } from '../../uikit';

interface ISignUpScreen extends StackScreenProps<any> {}

const SignUpScreen: FC<ISignUpScreen> = ({ navigation }) => {
  const onSignUpPress = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email and set password</Text>
      <ButtonWithText onPress={onSignUpPress} title="Sign Up" isLoading={false} type="transparent" />
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

export default SignUpScreen;
