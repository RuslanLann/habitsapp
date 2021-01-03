import React, { FC, ReactElement, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { REST } from '../../rest';
import { sizes } from '../../theme';
import { IChartData } from '../../types/chartData';
import FeatureListItem from '../feature-list-item/FeatureListItem';

const FeatureList: FC = (): ReactElement => {
  const [chartData, setChartData] = useState<IChartData[]>([]);

  useEffect(() => {
    REST.getData().then((d: IChartData[]) => {
      setChartData(d);
    });
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={chartData}
      renderItem={({ item }) => {
        console.log(item, 'item <<<<');
        const itemKeyValue = Object.keys(item);
        console.log(itemKeyValue, 'itemKeyValue <<<<');

        return <FeatureListItem title={itemKeyValue[1]} value={item[itemKeyValue[1]]} />;
      }}
      keyExtractor={(item: IChartData, index: number) => `${index}`}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.padding,
  },
});

export default FeatureList;
