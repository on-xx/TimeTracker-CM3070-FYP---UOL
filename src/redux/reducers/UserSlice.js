import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userData: {},
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {fetchUserData} = userSlice.actions;

export default userSlice.reducer;
