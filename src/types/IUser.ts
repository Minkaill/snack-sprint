export type IAuth = {
  token: string;
  id: string;
  role: string;
};

export type authState = {
  data: IAuth | null;
  isLoading: boolean;
  isAuth: boolean;
};

export interface IUser {
  name: string;
  phone: string;
  city: string;
  adress: string;
  email: string;
  password: string;
  restaurant: string;
}
