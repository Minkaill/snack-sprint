export type IAuth = {
  token: string;
  id: string;
  role: string;
};

export type authState = {
  data: IAuth | null;
  isLoading: boolean;
};

export interface IUser {
  name: string;
  phone: string;
  city: string;
  address: string;
  mail: string;
  password: string;
}
