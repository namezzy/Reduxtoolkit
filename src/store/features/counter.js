import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888,
  },
  reducers: {
    addNumber(state, action) {},
    subNumber(state, action) {},
  },
});

export default counterSlice.reducer;
