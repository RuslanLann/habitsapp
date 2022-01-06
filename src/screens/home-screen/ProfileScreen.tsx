import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { themeProvider } from '../../theme';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="to radar chart"
        color={themeProvider.colors.turq}
        onPress={() => navigation.navigate('RadarScreen')}
      />
    </View>
  );
};
