import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RadarChart from './RadarChart';
import { themeProvider } from '../../theme';
import { ChartMaxima, ProcessedData } from './utils/types';
import { getMaxima, processData } from './utils/helpers';
import { RootState } from '../../store/configureStore';
import { radarSlice } from '../../screens/radar-screen/store';

const { colors } = themeProvider;

const RadarChartContainer = () => {
  const dispatch = useDispatch();
  const setRadarData = (radarChartData: ProcessedData[][]) => dispatch(radarSlice.actions.setRadarData(radarChartData));
  const setRadarMaxima = (radarChartMaxima: ChartMaxima) =>
    dispatch(radarSlice.actions.setRadarMaxima(radarChartMaxima));

  const radarData = useSelector((state: RootState) => state.radar.radarData);
  const radarMaxima = useSelector((state: RootState) => state.radar.radarMaxima);

  useEffect(() => {
    // fetchChartData().then((data: CharacterData[]) => {
    //   const chartData = processData(data);
    //   const chartMaxima = getMaxima(data);
    //   setRadarData(chartData);
    //   setRadarMaxima(chartMaxima);
    // });
  }, []);

  return (
    <RadarChart
      chartData={radarData}
      chartMaxima={radarMaxima}
      colors={{
        primary: colors.primary,
        notification: colors.notification,
        text: colors.text,
        additional: colors.turq,
      }}
    />
  );
};

export default RadarChartContainer;
