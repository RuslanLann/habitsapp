import React, { FC, ReactElement, useEffect, useState } from 'react';
import { StyleSheet, SectionList } from 'react-native';

import { REST } from '../../rest';
import { sizes } from '../../theme';
import { IChartData } from '../../types/chartData';
import FeatureListHeader from '../feature-list-header/FeatureListHeader';
import FeatureListItem from '../feature-list-item/FeatureListItem';

const FeatureList: FC = (): ReactElement => {
  const [chartData, setChartData] = useState<IChartData[]>([]);

  useEffect(() => {
    REST.getData().then((d: IChartData[]) => {
      setChartData(d);
    });
  }, []);

  return (
    <SectionList
      contentContainerStyle={styles.contentContainerStyle}
      sections={[
        { title: 'Mind', data: chartData },
        { title: 'Body', data: chartData },
        { title: 'Finances', data: chartData },
        { title: 'Other', data: chartData },
      ]}
      renderSectionHeader={({ section: { title } }) => <FeatureListHeader title={title} />}
      renderItem={({ item }) => {
        console.log(item, 'item <<<<');
        const itemKeyValue = Object.keys(item);
        console.log(itemKeyValue, 'itemKeyValue <<<<');

        return <FeatureListItem title={itemKeyValue[1]} value={item[itemKeyValue[1]]} />;
      }}
      keyExtractor={(item: IChartData, index: number) => `${index}`}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: sizes.screenHeight / 2,
  },
});

export default FeatureList;
