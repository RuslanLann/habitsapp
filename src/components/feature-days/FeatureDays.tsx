import React, { FC, ReactElement } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { responsivePixels, sizes, themeProvider } from '../../theme';

const CONTAINER_WIDTH = sizes.screenWidth * 0.6;

interface FeatureDays {
  text: boolean;
}
interface FeatureDay {
  text?: string;
}

const FeatureDay: FC<FeatureDay> = ({ text }) => (
  <View style={styles.dayContainer}>
    {text ? (
      <Text style={styles.day}>{text}</Text>
    ) : (
      <TouchableOpacity style={styles.dayButton}>
        <Icon
          style={styles.icon}
          name={Math.random() * 100 > 50 ? 'checkmark-outline' : 'close-outline'}
          size={responsivePixels.getWidthPx(22)}
          color={themeProvider.colors.primary}
        />
      </TouchableOpacity>
    )}
  </View>
);

const FeatureDays: FC<FeatureDays> = ({ text }): ReactElement => {
  return (
    <View style={styles.container}>
      <FeatureDay text={text ? 'Th' : ''} />
      <FeatureDay text={text ? 'We' : ''} />
      <FeatureDay text={text ? 'Tu' : ''} />
      <FeatureDay text={text ? 'Mo' : ''} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 35,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dayContainer: {
    height: '100%',
    width: CONTAINER_WIDTH / 4,
    borderLeftWidth: 1,
    borderLeftColor: themeProvider.colors.border,
  } as ViewStyle,
  dayButton: {
    width: '100%',
    height: '100%',
    paddingVertical: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  day: {
    textAlign: 'center',
    color: themeProvider.colors.text,
  },
  icon: {
    height: '100%',
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeatureDays;
