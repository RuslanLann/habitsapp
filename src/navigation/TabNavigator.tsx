import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ProfileScreen, RadarScreen } from '../screens';
import { View } from 'react-native';
import { Text } from 'victory-native';

const Tab = createBottomTabNavigator();

const CustomTabBar = () => (
  <View>
    <Text>CustomTabBar</Text>
  </View>
);

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="RadarScreen" tabBar={CustomTabBar}>
    <Tab.Screen name="RadarScreen" component={RadarScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
