import { loginUser } from "../user/apiCalls/loginUser";
import { LoginFormFields } from "../user/interfaces/formFields";

export const useLoginPage = () => {
  const onSubmit = async (login: LoginFormFields) => {
    const token = await loginUser(login.email, login.password);
    localStorage.setItem("token", token.access_token);
  };

  return { onSubmit };
};
