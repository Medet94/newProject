import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'count',
  initialState: {
    count: 0,
    todos: [],
  },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;