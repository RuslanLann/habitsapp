import React, { FC, useCallback, useEffect } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { StackScreenProps } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';

import { HabitList, RadarChart } from '../../components';
import { AddDataButton, Card, ScreenWrapper } from '../../uikit';

import { themeProvider } from '../../theme';
import { minPadding, screenHeight } from '../../theme/sizes';
import { ADD_NEW_HABIT_SCREEN } from '../../constants/screenNames';
import { RadarChartStore } from '../../store-mobx';

const RADAR_CARD_HEIGHT = screenHeight / 2.5;

interface RadarScreenProps extends StackScreenProps<any> {}

export const RadarScreen: FC<RadarScreenProps> = observer(({ navigation }) => {
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

  const onAddDataPress = useCallback(() => {
    navigation.navigate(ADD_NEW_HABIT_SCREEN);
  }, [navigation]);

  useEffect(() => {
    RadarChartStore.fetchHabitsAndSetChartData();
  }, []);

  return (
    <>
      <ScreenWrapper>
        <AnimatedCard style={[styles.radarCard, cardAnimatedStyles]}>
          <Animated.View style={viewAnimatedStyles}>
            <RadarChart />
          </Animated.View>
        </AnimatedCard>
        <HabitList onScroll={scrollHandler} />
      </ScreenWrapper>
      <AddDataButton onPress={onAddDataPress} />
    </>
  );
});

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
