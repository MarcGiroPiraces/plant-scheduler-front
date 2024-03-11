import { useLoginForm } from "../../hooks/useLoginForm";
import { LoginFormFields } from "../interfaces/formFields";

export interface LoginFormProps {
  actionOnSubmit: (login: LoginFormFields) => Promise<void>;
}

export function LoginForm({ actionOnSubmit }: LoginFormProps) {
  const { register, errors, onSubmit } = useLoginForm({
    actionOnSubmit,
  });

  return (
    <form onSubmit={onSubmit}>
      <div>
        <p>email</p>
        <input {...register("email", { required: true })} />
        {errors.email && <span>Has d'introduir l'email.</span>}

        <p>password</p>
        <input {...register("password", { required: true })} />
        {errors.password && <span>Has d'introduir la password.</span>}
      </div>

      <div>{errors.root && <span>Invalid email or password</span>}</div>

      <input type="submit" />
    </form>
  );
}
