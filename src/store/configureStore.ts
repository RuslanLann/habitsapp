import { configureStore } from '@reduxjs/toolkit';

import { radarSlice } from '../screens/radar-screen/store';
import { RadarState } from '../screens/radar-screen/store/types';

const store = configureStore({
  reducer: {
    radar: radarSlice.reducer,
  },
});

export type RootState = {
  radar: RadarState;
};

export default store;
