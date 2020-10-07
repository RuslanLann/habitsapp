import React from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView } from 'react-native';

import { RadarChart, AddDataButton, FeatureList } from './components';
import { sizes } from './constants';

const App = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.appContainer}>
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
  appContainer: {
    flexGrow: 1,
    padding: sizes.PADDING_HORIZONTAL,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
