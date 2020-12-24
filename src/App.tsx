import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { theme } from './theme';
import { TabNavigator } from './navigation';

const App = () => {
  const scheme = useColorScheme();

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? theme.darkTheme : theme.lightTheme}>
        <TabNavigator />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
