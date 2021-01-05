import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { AddDataButton, FeatureList, RadarChart } from '../../components';
import { sizes, themeProvider } from '../../theme';
import { Card } from '../../uikit';

const RADAR_CARD_HEIGHT = sizes.screenHeight / 2.5;

const RadarScreen = () => {
  const chartScale = useSharedValue(1);
  const cardHeight = useSharedValue(RADAR_CARD_HEIGHT);
  const AnimatedCard = Animated.createAnimatedComponent(Card);

  const viewAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: chartScale.value }],
    } as ViewStyle;
  });
  const cardAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: cardHeight.value,
    } as ViewStyle;
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentCardHeight = RADAR_CARD_HEIGHT - event.contentOffset.y;
      const scalePercent = currentCardHeight / RADAR_CARD_HEIGHT;

      if (scalePercent > 0.4 && scalePercent < 1) {
        chartScale.value = scalePercent;
        cardHeight.value = currentCardHeight;
      }

      if (scalePercent > 1) {
        chartScale.value = 1;
        cardHeight.value = RADAR_CARD_HEIGHT;
      }
    },
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screenContainer}>
        <AnimatedCard style={[styles.radarCard, cardAnimatedStyles]}>
          <Animated.View style={viewAnimatedStyles}>
            <RadarChart />
          </Animated.View>
        </AnimatedCard>
        <FeatureList onScroll={scrollHandler} />
      </View>
      <AddDataButton onPress={() => (cardHeight.value = 200)} />
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
    paddingHorizontal: sizes.padding,
  },
  radarCard: {
    position: 'absolute',
    top: 0,
    left: sizes.padding,
    zIndex: 99,
  },
});

export default RadarScreen;
