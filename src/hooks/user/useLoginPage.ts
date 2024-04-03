import { loginUser } from "../../api/user/loginUser.api";
import { LoginFormFields } from "../../interfaces/user/formFields";
import { useGetUserData } from "./useGetUserData";

export const useLoginPage = () => {
  const onSubmit = async (login: LoginFormFields) => {
    const token = await loginUser(login.email, login.password);
    localStorage.setItem("token", token.access_token);
  };
  useGetUserData();

  return { onSubmit };
};
