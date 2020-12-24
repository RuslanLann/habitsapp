import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AddDataButton, FeatureList, RadarChart } from '../../components';
import { sizes, themeProvider } from '../../theme';

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
    backgroundColor: themeProvider.colors.background,
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: sizes.paddingHorizontal,
  },
  chartContainer: {
    backgroundColor: themeProvider.colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default RadarScreen;
