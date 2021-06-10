import React, { FC } from 'react';
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel } from 'victory-native';

import { IChartMaxima, IProcessedData } from './utils/types';

interface IRadarChart {
  chartData: IProcessedData[][];
  chartMaxima: IChartMaxima | null;
  colors: {
    primary: string;
    notification: string;
    text: string;
    additional: string;
  };
}

const RadarChart: FC<IRadarChart> = ({ chartData, chartMaxima, colors }) => {
  return (
    <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
      <VictoryGroup
        colorScale={[colors.primary, colors.notification, colors.additional]}
        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        animate={{
          duration: 600,
          easing: 'circle',
        }}
      >
        {chartData.map((data, i) => (
          <VictoryArea key={i} data={data} />
        ))}
      </VictoryGroup>
      {chartMaxima &&
        Object.keys(chartMaxima).map((key, i) => (
          <VictoryPolarAxis
            key={i}
            dependentAxis
            style={{
              axisLabel: { padding: 20, fill: colors.text },
              axis: { stroke: 'none' },
              grid: { stroke: colors.text, strokeWidth: 0.25, opacity: 0.8 },
              tickLabels: { fill: colors.text },
            }}
            tickLabelComponent={<VictoryLabel labelPlacement="vertical" />}
            labelPlacement="vertical"
            label={key}
            axisValue={i + 1}
            tickFormat={(t) => Math.ceil(t * chartMaxima[key])}
            tickValues={[0.25, 0.5, 0.75]}
          />
        ))}
      <VictoryPolarAxis
        labelPlacement="parallel"
        tickFormat={() => ''}
        style={{
          axis: { stroke: 'none' },
          grid: { stroke: colors.text, opacity: 0.8 },
        }}
      />
    </VictoryChart>
  );
};

export default RadarChart;
