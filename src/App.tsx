import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

import { RadarChart, AddDataButton } from './components';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={styles.chartContainer}>
      <RadarChart />
      <AddDataButton />
    </View>
  </>
);

const styles = StyleSheet.create({
  chartContainer: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
