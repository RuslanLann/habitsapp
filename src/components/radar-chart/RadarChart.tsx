import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import {
  VictoryChart,
  VictoryTheme,
  VictoryGroup,
  VictoryArea,
  VictoryPolarAxis,
  VictoryLabel,
} from 'victory-native';
import { colors } from '../../constants';
import { REST } from '../../rest';
import { IChartData, IChartMaxima } from '../../types/chartData';

import { radarChartSelectors } from './duck';

const RadarChart = () => {
  const [chartData, setChartData] = useState<object[]>([]);
  const [chartMaxima, setChartMaxima] = useState<IChartMaxima | null>(null);

  useEffect(() => {
    REST.getData()
      .then((d: IChartData[]) => {
        setChartData(radarChartSelectors.processData(d));
        setChartMaxima(radarChartSelectors.getMaxima(d));
      });
  }, []);

  return (
    <VictoryChart
      polar
      theme={VictoryTheme.material}
      domain={{ y: [0, 1] }}
    >
      <VictoryGroup
        colorScale={[colors.BLUE, colors.ORANGE, colors.TURQ]}
        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        animate={{
          duration: 600,
          easing: 'circle',
        }}
      >
        {chartData.map((data, i) => <VictoryArea key={i} data={data} />)}
      </VictoryGroup>
      {
        chartMaxima && Object.keys(chartMaxima).map((key, i) => (
          <VictoryPolarAxis
            key={i}
            dependentAxis
            style={{
              axisLabel: { padding: 20, fill: 'white' },
              axis: { stroke: 'none' },
              grid: { stroke: 'white', strokeWidth: 0.25, opacity: 0.8 },
              tickLabels: { fill: 'white' },
            }}
            tickLabelComponent={
              <VictoryLabel labelPlacement="vertical" />
            }
            labelPlacement="vertical"
            label={key}
            axisValue={i + 1}
            tickFormat={t => Math.ceil(t * chartMaxima[ key ])}
            tickValues={[0.25, 0.5, 0.75]}
          />
        ))
      }
      <VictoryPolarAxis
        labelPlacement="parallel"
        tickFormat={() => ''}
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: 'white', opacity: 0.8 },
        }}
      />
    </VictoryChart>
  );
};

export default RadarChart;
