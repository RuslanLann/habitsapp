import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider } from 'react-redux';

import { AuthNavigator, StackNavigator } from './navigation';

import { useAuthentication } from './hooks';
import { store } from './store';
import { darkTheme, lightTheme } from './theme';

const App = () => {
  const scheme = useColorScheme();
  const isColorSchemeDark = scheme === 'dark';
  const themeType = isColorSchemeDark ? darkTheme : lightTheme;
  const { authToken } = useAuthentication();

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
