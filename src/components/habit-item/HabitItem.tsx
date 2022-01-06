import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { Card } from '../../uikit';
import { HabitDays } from '../habit-days/HabitDays';

import { getWidthPx, themeProvider } from '../../theme';

export interface HabitItemProps {
  title: string;
}

export const HabitItem: FC<HabitItemProps> = ({ title }): ReactElement => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <HabitDays />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
    paddingVertical: 0,
    paddingRight: 5,
    justifyContent: 'space-between',
  } as ViewStyle,
  title: {
    fontSize: getWidthPx(16),
    color: themeProvider.colors.text,
  } as TextStyle,
});
