import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../api/api";
import { IField } from "../../types/IField";
import { IAuth } from "../../types/IUser";

export const signUp = createAsyncThunk<IAuth, { field: IField }>(
  "/sign-up",
  async (field) => {
    try {
      const { data } = await axios.post("/client/signup", field);
      return data;
    } catch (error) {
      console.warn(`Ошибка: ${error}`);
      alert(`Ошибка ${error}`);
    }
  }
);
