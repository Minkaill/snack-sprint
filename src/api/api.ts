import axioss from "axios";
import Cookies from "universal-cookie";

// Создание экземпляра axios с базовым URL
export const axios = axioss.create({
  baseURL: "https://unifood.onrender.com",
});

export const axiosPrivate = axioss.create({
  baseURL: "https://unifood.onrender.com",
  headers: {
    Authorization: "Bearer " + 1,
  },
});

export const cookie = new Cookies();