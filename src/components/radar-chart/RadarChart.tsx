import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { VictoryChart, VictoryTheme, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel } from 'victory-native';

import { RootState } from '../../store/configureStore';
import { themeProvider } from '../../theme';

const { colors } = themeProvider;

export const RadarChart = () => {
  const radarData = useSelector((state: RootState) => state.radar.radarData);
  const radarMaxima = useSelector((state: RootState) => state.radar.radarMaxima);

  return (
    <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 1] }}>
      <VictoryGroup
        colorScale={[colors.primary, colors.notification, colors.turq]}
        style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        animate={{
          duration: 600,
          easing: 'circle',
        }}
      >
        {radarData.map((data, i) => (
          <VictoryArea key={data[0].x} data={data} />
        ))}
      </VictoryGroup>
      {radarMaxima &&
        Object.keys(radarMaxima).map((key, i) => (
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
            tickFormat={(t) => Math.ceil(t * radarMaxima[key])}
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
