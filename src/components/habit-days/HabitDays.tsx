import React, { FC, ReactElement } from 'react';
import { View, StyleSheet, TouchableOpacity, ViewStyle, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { getWidthPx, themeProvider } from '../../theme';
import { screenWidth } from '../../theme/sizes';

const CONTAINER_WIDTH = screenWidth * 0.6;

interface HabitDaysProps {
  hasText?: boolean;
}

interface HabitDayProps {
  text?: string;
}

const HabitDay: FC<HabitDayProps> = ({ text }) => (
  <View style={styles.dayContainer}>
    {text ? (
      <Text style={styles.day}>{text}</Text>
    ) : (
      <TouchableOpacity style={styles.dayButton}>
        <Icon
          style={styles.icon}
          name={Math.random() * 100 > 50 ? 'checkmark-outline' : 'close-outline'}
          size={getWidthPx(22)}
          color={themeProvider.colors.primary}
        />
      </TouchableOpacity>
    )}
  </View>
);

export const HabitDays: FC<HabitDaysProps> = ({ hasText }): ReactElement => {
  return (
    <View style={styles.container}>
      <HabitDay text={hasText ? 'Th' : ''} />
      <HabitDay text={hasText ? 'We' : ''} />
      <HabitDay text={hasText ? 'Tu' : ''} />
      <HabitDay text={hasText ? 'Mo' : ''} />
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
