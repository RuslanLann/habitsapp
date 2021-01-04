import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { AddDataButton, FeatureList, RadarChart } from '../../components';
import { sizes, themeProvider } from '../../theme';
import { Card } from '../../uikit';

const RadarScreen = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.screenContainer}>
      <Card>
        <RadarChart />
      </Card>
      <FeatureList />
    </View>
    <AddDataButton />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: themeProvider.colors.background,
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: sizes.padding,
  },
});

export default RadarScreen;
