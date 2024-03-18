import axios from "axios";

export interface accessToken {
  access_token: string;
}

export const loginUser = async (
  email: string,
  password: string
): Promise<accessToken> => {
  const { data } = await axios.post(`user/login`, {
    email,
    password,
  });

  return data;
};
