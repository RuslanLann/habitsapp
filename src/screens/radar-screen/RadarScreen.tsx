import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AddDataButton, FeatureList, RadarChart } from '../../components';
import { sizes } from '../../constants';

const RadarScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.screenContainer}>
      <RadarChart />
      <FeatureList />
      <AddDataButton />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  screenContainer: {
    flexGrow: 1,
    padding: sizes.PADDING_HORIZONTAL,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RadarScreen;
