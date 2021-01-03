import React, { FC, ReactElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { themeProvider, responsivePixels, sizes } from '../../../theme';

interface IFeatureListItem {
  title: string;
  value: number;
}

const FeatureListItem: FC<IFeatureListItem> = ({ title, value }): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 5,
    padding: sizes.padding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: themeProvider.colors.card,
    borderRadius: sizes.borderRadius,
    ...themeProvider.boxShadow,
  },
  title: {
    fontSize: responsivePixels.getWidthPx(16),
    color: themeProvider.colors.text,
  },
  value: {
    fontSize: responsivePixels.getWidthPx(14),
    color: themeProvider.colors.text,
  },
});

export default FeatureListItem;
