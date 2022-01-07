import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AddNewHabitScreen, ProfileScreen, RadarScreen } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="RadarScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="RadarScreen" component={RadarScreen} />
    <Stack.Screen name="AddNewHabitScreen" component={AddNewHabitScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
