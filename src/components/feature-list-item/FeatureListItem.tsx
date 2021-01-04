import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { themeProvider, responsivePixels } from '../../theme';
import { Card } from '../../uikit';

interface IFeatureListItem {
  title: string;
  value: number;
}

const FeatureListItem: FC<IFeatureListItem> = ({ title, value }): ReactElement => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: responsivePixels.getWidthPx(16),
    color: themeProvider.colors.text,
  } as TextStyle,
  value: {
    fontSize: responsivePixels.getWidthPx(14),
    color: themeProvider.colors.text,
  } as TextStyle,
  card: {
    marginBottom: 5,
    justifyContent: 'space-between',
  } as ViewStyle,
});

export default FeatureListItem;
