import { createSlice } from '@reduxjs/toolkit';

import { setFeatureList, setRadarData, setRadarMaxima } from './radarActions';
import { radarInitialState } from './radarState';

const radarSlice = createSlice({
  name: 'radar',
  initialState: radarInitialState,
  reducers: {
    setRadarData,
    setRadarMaxima,
    setFeatureList,
  },
});

export default radarSlice;
