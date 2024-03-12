import { useLoginForm } from "../../hooks/user/useLoginForm";
import { LoginFormFields } from "../../interfaces/user/formFields";

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
        <label htmlFor="email">email</label>
        <input id="email" {...register("email", { required: true })} />
        {errors.email && <span>Has d'introduir l'email.</span>}

        <label>password</label>
        <input {...register("password", { required: true })} />
        {errors.password && <span>Has d'introduir la password.</span>}
      </div>

      <div>{errors.root && <span>Invalid email or password</span>}</div>

      <input type="submit" />
    </form>
  );
}
