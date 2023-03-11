import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/IUser";
import { signUp } from "../Actions/authAction";

const initialState: authState = {
  data: null,
  isLoading: false,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state) => {
        state.isAuth = false;
        state.isLoading = true;
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
