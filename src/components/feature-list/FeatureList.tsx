import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

import { REST } from '../../rest';
import { IChartData } from '../../types/chartData';

const FeatureList = () => {
  const [chartData, setChartData] = useState<IChartData[]>([]);

  useEffect(() => {
    REST.getData()
      .then((d: IChartData[]) => {
        setChartData(d);
      });
  }, []);

  return (
    <FlatList
      data={chartData}
      renderItem={({ item, index }) => (
        <View key={index}>
          <Text>intelligence</Text>
          <Text>{item.intelligence}</Text>
        </View>
      )}
    />
  );
};

export default FeatureList;
