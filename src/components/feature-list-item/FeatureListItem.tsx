import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { CharacterData } from '../../rest/rest';

import { themeProvider, responsivePixels } from '../../theme';
import { Card } from '../../uikit';
import FeatureDays from '../feature-days/FeatureDays';

interface FeatureListItem {
  title: string;
  data: CharacterData[];
}

const FeatureListItem: FC<FeatureListItem> = ({ title }): ReactElement => {
  return (
    <Card style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <FeatureDays />
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
    fontSize: responsivePixels.getWidthPx(16),
    color: themeProvider.colors.text,
  } as TextStyle,
});

export default FeatureListItem;
