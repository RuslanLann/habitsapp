import { PayloadAction } from '@reduxjs/toolkit';

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

export const setHabitList = (state: RadarState, action: PayloadAction<HabitGroup[]>) => {
  const newState = {
    ...state,
    habitList: action.payload,
  };

  return newState;
};

export const addNewHabitToGroup = (
  state: RadarState,
  action: PayloadAction<{ groupName: string; newHabitTitle: string }>,
) => {
  const { groupName, newHabitTitle } = action.payload;

  const habitList = state.habitList.map((habitGroup) => {
    if (habitGroup.groupName === groupName) {
      habitGroup.data = [...habitGroup.data, { id: Date.now(), title: newHabitTitle, score: 0, daysCompleted: [] }];
    }

    return habitGroup;
  });

  const newState = {
    ...state,
    habitList,
  };

  return newState;
};
