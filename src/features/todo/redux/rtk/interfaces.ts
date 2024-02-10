import { type IUser } from "../../interfaces";

export interface ILoginResponse {
  accessToken: string;
  userData: IUser;
}

export interface ILoginBody {
  password?: string;
  user?: string;
}

export interface ITodo {
  completed: boolean;
  userId: number;
  title: string;
  id: number;
}
