import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import { themeProvider } from '../../theme';
import { minPadding } from '../../theme/sizes';

export const ScreenWrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.screenContainer}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: themeProvider.colors.background,
  },
  screenContainer: {
    flexGrow: 1,
    paddingHorizontal: minPadding,
  },
});
