import { configureStore } from '@reduxjs/toolkit';

import { radarSlice, RadarState } from '../screens/radar-screen/store';

const store = configureStore({
  reducer: {
    radar: radarSlice.reducer,
  },
});

export type RootState = {
  radar: RadarState;
};

export default store;
