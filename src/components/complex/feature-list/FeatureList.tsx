import React, { FC, ReactElement, useEffect, useState } from 'react';
import { StyleSheet, SectionList, TextStyle, Text } from 'react-native';

import { REST } from '../../../rest';
import { responsivePixels, themeProvider } from '../../../theme';
import { IChartData } from '../../../types/chartData';
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
      sections={[
        { title: 'Mind', data: chartData },
        { title: 'Body', data: chartData },
      ]}
      renderSectionHeader={({ section: { title } }) => <Text style={styles.header}>{title}</Text>}
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
  header: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: responsivePixels.getWidthPx(20),
    color: themeProvider.colors.notification,
    // backgroundColor: themeProvider.colors.card,
  } as TextStyle,
});

export default FeatureList;
