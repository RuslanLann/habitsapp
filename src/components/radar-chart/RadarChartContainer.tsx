import React, { useEffect, useState } from 'react';

import RadarChart from './RadarChart';
import { themeProvider } from '../../theme';
import { REST } from '../../rest';
import { ChartData, ChartMaxima, ProcessedData } from './utils/types';
import { getMaxima, processData } from './utils/helpers';

const { colors } = themeProvider;

const RadarChartContainer = () => {
  const [chartData, setChartData] = useState<ProcessedData[][]>([]);
  const [chartMaxima, setChartMaxima] = useState<ChartMaxima | null>(null);

  useEffect(() => {
    REST.getData().then((d: ChartData[]) => {
      setChartData(processData(d));
      setChartMaxima(getMaxima(d));
    });
  }, []);

  return (
    <RadarChart
      chartData={chartData}
      chartMaxima={chartMaxima}
      colors={{
        primary: colors.primary,
        notification: colors.notification,
        text: colors.text,
        additional: colors.turq,
      }}
    />
  );
};

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {};

export default RadarChartContainer;
