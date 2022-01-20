import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { AuthNavigator, StackNavigator } from './navigation';

import { useAuthentication } from './hooks';
import { darkTheme, lightTheme } from './theme';

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isColorSchemeDark = scheme === 'dark';
  const themeType = isColorSchemeDark ? darkTheme : lightTheme;
  const { authToken } = useAuthentication();

  return (
    <>
      <StatusBar barStyle={isColorSchemeDark ? 'light-content' : 'dark-content'} />
      <AppearanceProvider>
        {authToken ? (
          <NavigationContainer theme={themeType}>
            <StackNavigator />
          </NavigationContainer>
        ) : (
          <NavigationContainer theme={themeType}>
            <AuthNavigator />
          </NavigationContainer>
        )}
      </AppearanceProvider>
    </>
  );
};

export default App;
