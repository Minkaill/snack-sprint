import axioss from "axios";
import Cookies from "universal-cookie";
import { userData } from "../local_hooks/helper";

const { token } = userData();

// Создание экземпляра axios с базовым URL
export const axios = axioss.create({
  baseURL: "https://unifood.onrender.com",
});

export const axiosPrivate = axioss.create({
  baseURL: "https://unifood.onrender.com",
  headers: {
    Authorization: "Bearer " + token,
  },
});

export const cookie = new Cookies();
