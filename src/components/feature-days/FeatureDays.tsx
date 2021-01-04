import React, { FC, ReactElement } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { responsivePixels, sizes, themeProvider } from '../../theme';

const CONTAINER_WIDTH = sizes.screenWidth * 0.6;

interface IFeatureDays {
  text: boolean;
}
interface IFeatureDay {
  text?: string;
}

const FeatureDay: FC<IFeatureDay> = ({ text }) => (
  <View style={styles.dayContainer}>
    {text ? (
      <Text style={styles.day}>{text}</Text>
    ) : (
      <TouchableOpacity style={styles.dayButton}>
        <Icon
          name={Math.random() * 100 > 50 ? 'checkmark-outline' : 'close-outline'}
          size={responsivePixels.getWidthPx(18)}
          color={themeProvider.colors.primary}
          style={styles.icon}
        />
      </TouchableOpacity>
    )}
  </View>
);

const FeatureDays: FC<IFeatureDays> = ({ text }): ReactElement => {
  return (
    <View style={styles.container}>
      <FeatureDay text={text && 'Th'} />
      <FeatureDay text={text && 'We'} />
      <FeatureDay text={text && 'Tu'} />
      <FeatureDay text={text && 'Mo'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dayContainer: {
    height: 15,
    width: CONTAINER_WIDTH / 4,
    borderLeftWidth: 1,
    borderLeftColor: themeProvider.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  dayButton: {},
  day: {},
  icon: {},
});

export default FeatureDays;
