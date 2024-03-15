import { LoginFormFields } from "./formFields";

export interface LoginFormProps {
  actionOnSubmit: (login: LoginFormFields) => Promise<void>;
}
