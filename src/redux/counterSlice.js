import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "likes",
  initialState: {
    like: 0,
  },

  reducers: {
    increment: (state) => {
      state.like += 1;
    },
    decrement: (state) => {
      state.like -= 1;
    },
    reset: (state) => {
      state.like = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
