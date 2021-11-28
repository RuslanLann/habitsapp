import { createSlice } from '@reduxjs/toolkit';

const radarReducer = createSlice({
  name: 'radar',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export default radarReducer;
