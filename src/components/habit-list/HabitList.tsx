import React, { FC, ReactElement, useCallback, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, SectionList, SectionListProps, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated from 'react-native-reanimated';

import { HabitItem } from '../habit-item/HabitItem';
import { HabitListHeader } from '../habit-list-header/HabitListHeader';

import { screenHeight } from '../../theme/sizes';
import { RadarChartStore } from '../../store-mobx';
import { toJS } from 'mobx';

const RADAR_CARD_HEIGHT = screenHeight / 2.5;

interface HabitListProps {
  onScroll:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | Animated.Node<((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined>
    | undefined;
}

export const HabitList: FC<HabitListProps> = observer(({ onScroll }): ReactElement => {
  const AnimatedSectionList = Animated.createAnimatedComponent<SectionListProps<Habit, HabitGroup>>(SectionList);

  const radarStore = useRef(RadarChartStore).current;
  const { habitList } = radarStore;

  const renderSectionHeader = useCallback(
    ({ section: { groupName } }: { section: HabitGroup }) => <HabitListHeader title={groupName} />,
    [],
  );

  const renderItem = useCallback(({ item }: { item: Habit }) => <HabitItem title={item.title} />, []);

  const keyExtractor = useCallback((item: Habit) => item.id.toString(), []);

  return (
    <AnimatedSectionList
      contentContainerStyle={styles.contentContainerStyle}
      sections={toJS(habitList)}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
});

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: RADAR_CARD_HEIGHT * 0.4,
    paddingTop: RADAR_CARD_HEIGHT - RADAR_CARD_HEIGHT * 0.4,
    paddingBottom: RADAR_CARD_HEIGHT / 2 + 15,
  },
});
