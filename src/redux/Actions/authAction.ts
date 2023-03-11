import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../api/api";
import { IUser } from "../../types/IUser";

export const signUpClient = createAsyncThunk<string, IUser>(
  "/sign-up/client",
  async (field) => {
    try {
      const { data } = await axios.post("/client/signup", field);
      console.log(data);
      return data;
    } catch (error) {
      console.log(`Ошибка: ${error}`);
      alert(`Ошибка ${error}`);
    }
  }
);

export const signUpCafe = createAsyncThunk<string, IUser>(
  "/sign-up/cafe",
  async (field) => {
    try {
      const { data } = await axios.post("/cafe/signup", field);
      return data;
    } catch (error) {
      console.log(`Ошибка: ${error}`);
      alert(`Ошибка ${error}`);
    }
  }
);
