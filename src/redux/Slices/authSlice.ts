import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/IUser";
import { signInClient, signUpCafe, signUpClient } from "../Actions/authAction";

const initialState: authState = {
  data: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpClient.fulfilled, (state) => {
        window.location.href = "/sign-in";
        state.isLoading = false;
      })
      .addCase(signUpClient.rejected, (state) => {
        state.isLoading = true;
      })

      .addCase(signUpCafe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpCafe.fulfilled, (state) => {
        window.location.href = "/sign-in";
        state.isLoading = false;
      })
      .addCase(signUpCafe.rejected, (state) => {
        state.isLoading = true;
      })

      .addCase(signInClient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInClient.fulfilled, (state, action) => {
        window.location.href = "/";
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(signInClient.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export const authReducer = authSlice.reducer;
