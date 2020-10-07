import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

import { colors } from '../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="to radar chart"
        color={colors.GREEN}
        onPress={() => navigation.navigate('RadarScreen')}
      />
    </View>
  );
};

export default HomeScreen;
