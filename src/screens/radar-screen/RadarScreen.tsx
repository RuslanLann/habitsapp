import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AddDataButton, FeatureList, RadarChart } from '../../components';
import { colors, sizes } from '../../theme';

const RadarScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.screenContainer}>
      <View style={styles.chartContainer}>
        <RadarChart />
      </View>
      <FeatureList />
      <AddDataButton />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: sizes.PADDING_HORIZONTAL,
  },
  chartContainer: {
    backgroundColor: colors.SECOND_BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default RadarScreen;
