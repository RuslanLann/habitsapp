import React, { useEffect, useState } from 'react';
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

import { radarChartSelectors } from './duck';
import { IChartMaxima } from './types';

const RadarChart = () => {
  const [chartData, setChartData] = useState<object[]>([]);
  const [chartMaxima, setChartMaxima] = useState<IChartMaxima | null>(null);

  useEffect(() => {
    REST.getData()
      .then((d: object[]) => {
        setChartData(radarChartSelectors.processData(d));
        setChartMaxima(radarChartSelectors.getMaxima(d));
      });
  }, []);

  return (
    <VictoryChart polar
      theme={VictoryTheme.material}
      domain={{ y: [0, 1] }}
    >
      <VictoryGroup
        colorScale={[colors.RED, colors.ORANGE, colors.GREEN]}
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
          <VictoryPolarAxis key={i} dependentAxis
            style={{
              axisLabel: { padding: 10 },
              axis: { stroke: 'none' },
              grid: { stroke: 'grey', strokeWidth: 0.25, opacity: 0.5 },
            }}
            tickLabelComponent={
              <VictoryLabel labelPlacement="vertical" />
            }
            labelPlacement="perpendicular"
            axisValue={i + 1} label={key}
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
          grid: { stroke: 'grey', opacity: 0.5 },
        }}
      />
    </VictoryChart>
  );
};

export default RadarChart;
