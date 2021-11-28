import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider } from 'react-redux';

import { theme } from './theme';
import { AuthNavigator, TabNavigator } from './navigation';
import { useAuthentication } from './hooks';
import { store } from './store';

const App = () => {
  const scheme = useColorScheme();
  const themeType = scheme === 'dark' ? theme.darkTheme : theme.lightTheme;
  const { authToken } = useAuthentication();

  return (
    <Provider store={store}>
      <AppearanceProvider>
        {authToken ? (
          <NavigationContainer theme={themeType}>
            <TabNavigator />
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
