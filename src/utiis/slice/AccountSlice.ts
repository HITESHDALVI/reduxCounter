import {createSlice} from "@reduxjs/toolkit";
import {initialAccountType} from "../reducer/reducer-type";
import {getUserById} from "../thunk/asyncThunk";

const initialState: initialAccountType = {
  amount: 0,
  pending: false,
  error: "",
};
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.amount -= action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.amount = action.payload.amount;
        state.pending = false;
      })
      .addCase(getUserById.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.error = action.error.message;
        state.pending = false;
      });
  },
});

export const {increment, decrement, incrementByAmount, decrementByAmount} =
  accountSlice.actions;

export default accountSlice.reducer;
