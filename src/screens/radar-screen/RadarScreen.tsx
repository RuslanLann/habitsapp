import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { HabitList } from '../../components';
import { AddDataButton, Card } from '../../uikit';
import { useDispatch } from 'react-redux';

import RadarChart from '../../components/radar-chart/RadarChart';

import { fetchHabitsAndSetChartData } from './store';

import { themeProvider } from '../../theme';
import { minPadding, screenHeight } from '../../theme/sizes';

const RADAR_CARD_HEIGHT = screenHeight / 2.5;

export const RadarScreen = () => {
  const dispatch = useDispatch();
  const loadHabitsData = () => dispatch(fetchHabitsAndSetChartData());

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

      if (scalePercent < 0.4) {
        chartScale.value = 0.4;
        cardHeight.value = RADAR_CARD_HEIGHT * 0.4;
      }
    },
  });

  useEffect(() => {
    loadHabitsData();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.screenContainer}>
        <AnimatedCard style={[styles.radarCard, cardAnimatedStyles]}>
          <Animated.View style={viewAnimatedStyles}>
            <RadarChart />
          </Animated.View>
        </AnimatedCard>
        <HabitList onScroll={scrollHandler} />
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
    paddingHorizontal: minPadding,
  },
  radarCard: {
    position: 'absolute',
    top: 5,
    left: minPadding,
    zIndex: 99,
  },
});
