import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getUserById = createAsyncThunk(
  "account/GETUSER",
  async (userId: number) => {
    const {data} = await axios.get(`http://localhost:8080/account/${userId}`);
    return data;
  }
);
