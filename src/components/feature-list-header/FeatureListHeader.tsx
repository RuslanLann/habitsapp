import React, { FC, ReactElement } from 'react';
import { Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';

import { themeProvider, responsivePixels, sizes } from '../../theme';
import { Card } from '../../uikit';

interface IFeatureListHeader {
  title: string;
}

const FeatureListHeader: FC<IFeatureListHeader> = ({ title }): ReactElement => {
  return (
    <Card style={styles.card}>
      <View style={styles.leftStick} />
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 5,
    paddingLeft: sizes.padding,
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'flex-start',
  } as ViewStyle,
  leftStick: {
    width: 3,
    height: '100%',
    marginRight: 5,
    backgroundColor: themeProvider.colors.primary,
  } as ViewStyle,
  title: {
    fontSize: responsivePixels.getWidthPx(18),
    color: themeProvider.colors.text,
    fontWeight: 'bold',
  } as TextStyle,
});

export default FeatureListHeader;
