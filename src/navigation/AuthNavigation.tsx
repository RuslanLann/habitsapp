import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthScreen } from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={AuthScreen} />
      {/* <Stack.Screen name="SignUp" component={SignUpScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
