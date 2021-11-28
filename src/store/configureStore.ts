import { configureStore } from '@reduxjs/toolkit';

import { radarSlice } from '../screens/radar-screen/store';

const store = configureStore({
  reducer: {
    radar: radarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
