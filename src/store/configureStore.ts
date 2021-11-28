import { configureStore } from '@reduxjs/toolkit';

import { radarReducer } from '../screens/radar-screen/store';

const store = configureStore({
  radar: radarReducer.reducer,
});

export default store;
