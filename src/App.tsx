import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen, RadarScreen } from './screens';

const Drawer = createDrawerNavigator();

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="RadarScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="RadarScreen" component={RadarScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default App;
