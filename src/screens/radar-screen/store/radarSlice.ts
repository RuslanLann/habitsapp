import { createSlice } from '@reduxjs/toolkit';

import { addNewHabitToGroup, setHabitList, setRadarData, setRadarMaxima } from './radarActions';
import { radarInitialState } from './radarState';

export const radarSlice = createSlice({
  name: 'radar',
  initialState: radarInitialState,
  reducers: {
    setRadarData,
    setRadarMaxima,
    setHabitList,
    addNewHabitToGroup,
  },
});