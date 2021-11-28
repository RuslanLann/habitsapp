import { PayloadAction } from '@reduxjs/toolkit';
import FeatureListItem from '../../../components/feature-list-item/FeatureListItem';
import { ChartMaxima, ProcessedData } from '../../../components/radar-chart/utils/types';

import { RadarState } from './types';

export const setRadarData = (state: RadarState, action: PayloadAction<ProcessedData[][]>) => {
  const newState = {
    ...state,
    radarData: action.payload,
  };

  return newState;
};

export const setRadarMaxima = (state: RadarState, action: PayloadAction<ChartMaxima>) => {
  const newState = {
    ...state,
    radarMaxima: action.payload,
  };

  return newState;
};

export const setFeatureList = (state: RadarState, action: PayloadAction<FeatureListItem[]>) => {
  const newState = {
    ...state,
    featureList: action.payload,
  };

  return newState;
};
