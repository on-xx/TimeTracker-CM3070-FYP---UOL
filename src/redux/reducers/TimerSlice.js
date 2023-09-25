import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isRunning: false,
  time: 0,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer: state => {
      state.isRunning = true;
    },
    pauseTimer: state => {
      state.isRunning = false;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    incrementTime: state => {
      state.time += 1;
    },
  },
});

export const {startTimer, pauseTimer, setTime, incrementTime} =
  timerSlice.actions;

export default timerSlice.reducer;
