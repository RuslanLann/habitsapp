import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

import { themeProvider, responsivePixels, sizes } from '../../theme';
import { Card } from '../../uikit';
import FeatureDays from '../feature-days/FeatureDays';

interface IFeatureListHeader {
  title: string;
}

const FeatureListHeader: FC<IFeatureListHeader> = ({ title }): ReactElement => {
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
    maxHeight: responsivePixels.getHeightPx(30),
    padding: 5,
    paddingLeft: sizes.padding,
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
    fontSize: responsivePixels.getWidthPx(16),
    color: themeProvider.colors.text,
    fontWeight: 'bold',
  } as TextStyle,
});

export default FeatureListHeader;
