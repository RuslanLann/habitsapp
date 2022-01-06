import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

import { themeProvider, getHeightPx, minPadding, getWidthPx } from '../../theme';
import { Card } from '../../uikit';
import FeatureDays from '../feature-days/FeatureDays';

interface FeatureListHeader {
  title: string;
}

const FeatureListHeader: FC<FeatureListHeader> = ({ title }): ReactElement => {
  return (
    <Card style={styles.card}>
      <View style={styles.leftBlock}>
        <View style={styles.leftStick} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <FeatureDays text={true} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight: getHeightPx(30),
    padding: 5,
    paddingLeft: minPadding,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
  } as ViewStyle,
  leftBlock: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  leftStick: {
    width: 3,
    height: '100%',
    marginRight: 5,
    backgroundColor: themeProvider.colors.primary,
  } as ViewStyle,
  title: {
    fontSize: getWidthPx(16),
    color: themeProvider.colors.text,
    fontWeight: 'bold',
  } as TextStyle,
});

export default FeatureListHeader;
