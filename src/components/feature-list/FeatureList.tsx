import React, { FC, ReactElement, useEffect, useState } from 'react';
import { StyleSheet, SectionList, NativeSyntheticEvent, NativeScrollEvent, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { REST } from '../../rest';
import { sizes } from '../../theme';
import { IChartData } from '../radar-chart/utils/types';
import FeatureListHeader from '../feature-list-header/FeatureListHeader';
import FeatureListItem from '../feature-list-item/FeatureListItem';

const RADAR_CARD_HEIGHT = sizes.screenHeight / 2.5;

interface IFeatureList {
  onScroll:
    | ((event: NativeSyntheticEvent<NativeScrollEvent>) => void)
    | Animated.Node<((event: NativeSyntheticEvent<NativeScrollEvent>) => void) | undefined>
    | undefined;
}

const FeatureList: FC<IFeatureList> = ({ onScroll }): ReactElement => {
  const [chartData, setChartData] = useState<IChartData[]>([]);
  const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

  useEffect(() => {
    REST.getData().then((d: IChartData[]) => {
      setChartData(d);
    });
  }, []);

  return (
    <AnimatedSectionList
      contentContainerStyle={styles.contentContainerStyle}
      sections={[
        { title: 'Intelligence', data: chartData },
        { title: 'Strength', data: chartData },
        { title: 'Charisma', data: chartData },
        { title: 'Stealth', data: chartData },
        { title: 'Luck', data: chartData },
        { title: 'Intelligence', data: chartData },
        { title: 'Strength', data: chartData },
        { title: 'Charisma', data: chartData },
        { title: 'Stealth', data: chartData },
        { title: 'Luck', data: chartData },
      ]}
      renderSectionHeader={({ section: { title } }) => <FeatureListHeader title={title} />}
      renderItem={({ item, index }) => {
        const itemKeyValue = Object.keys(item);

        return <FeatureListItem title={itemKeyValue[1]} index={index} />;
      }}
      keyExtractor={(item: IChartData, index: number) => `${index}`}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: RADAR_CARD_HEIGHT * 0.4,
    paddingTop: RADAR_CARD_HEIGHT - RADAR_CARD_HEIGHT * 0.4,
    paddingBottom: RADAR_CARD_HEIGHT / 2 + 15,
  },
});

export default FeatureList;
