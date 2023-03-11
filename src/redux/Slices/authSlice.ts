import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/IUser";
import { signUpCafe, signUpClient } from "../Actions/authAction";

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
        state.data = null;
      })

      .addCase(signUpCafe.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpCafe.fulfilled, (state) => {
        window.location.href = "/";
        state.isLoading = false;
      })
      .addCase(signUpCafe.rejected, (state) => {
        state.isLoading = true;
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
