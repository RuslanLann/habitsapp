import { PayloadAction } from '@reduxjs/toolkit';

import { ChartMaxima, ProcessedData } from '../../../components/radar-chart/utils/types';
import { RadarState } from './types';

export const setRadarData = (state: RadarState, action: PayloadAction<ProcessedData[][]>) => {
  state.radarData = action.payload;
};

export const setRadarMaxima = (state: RadarState, action: PayloadAction<ChartMaxima>) => {
  state.radarMaxima = action.payload;
};

export const setHabitList = (state: RadarState, action: PayloadAction<HabitGroup[]>) => {
  state.habitList = action.payload;
};

export const addNewHabitToGroup = (
  state: RadarState,
  action: PayloadAction<{ groupName: string; newHabitTitle: string }>,
) => {
  const { groupName, newHabitTitle } = action.payload;

  state.habitList = state.habitList.map((habitGroup) => {
    if (habitGroup.groupName === groupName) {
      habitGroup.data = [...habitGroup.data, { id: Date.now(), title: newHabitTitle, score: 0, daysCompleted: [] }];
    }

    return habitGroup;
  });
};
