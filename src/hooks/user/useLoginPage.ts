import { loginUser } from "../../api/user/loginUser.api";
import { LoginFormFields } from "../../interfaces/user/formFields";

export const useLoginPage = () => {
  const onSubmit = async (login: LoginFormFields) => {
    const token = await loginUser(login.email, login.password);
    localStorage.setItem("token", token.access_token);
  };

  return { onSubmit };
};
