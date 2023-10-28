import { type IUser } from "../../interfaces";

export interface ILoginResponse {
  accessToken: string;
  userData: IUser;
}

export interface ILoginBody {
  user?: string;
  password?: string;
}
