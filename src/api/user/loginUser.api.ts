import axios from "axios";
import { config } from "../../config";

export interface accessToken {
  access_token: string;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<accessToken> => {
  const { data } = await axios.post(`${config.PATH}user/login`, {
    email,
    password,
  });

  return data;
};
