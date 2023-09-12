import {createAction, createSlice} from "@reduxjs/toolkit";
import {initialBonusType} from "../reducer/reducer-type";

const initialState: initialBonusType = {
  points: 0,
  pending: false,
  error: "",
};
const incrementByAmount = createAction("account/incrementByAmount");
export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 10) {
        state.points += 1;
      }
    });
  },
});

export const {increment} = bonusSlice.actions;

export default bonusSlice.reducer;
