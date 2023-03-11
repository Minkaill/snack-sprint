import { IStoreUser } from "../types/IStoreUser";

export const storeUser = (data: IStoreUser) => {
  if (data) {
    localStorage.setItem(
      "user",
      JSON.stringify({ token: data.token, _id: data._id })
    );
  }
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser);
};
