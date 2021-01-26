import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { responsivePixels, sizes, themeProvider } from '../../theme';
import { ButtonWithText } from '../../uikit';

interface ISignInScreen extends StackScreenProps<any> {}

const SignInScreen: FC<ISignInScreen> = ({ navigation }) => {
  const onSignInPress = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email and password</Text>
      <ButtonWithText title="Sign In" isLoading={false} onPress={onSignInPress} />
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
