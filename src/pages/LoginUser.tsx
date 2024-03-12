import { LoginForm } from "../components/user/LoginForm";
import { useLoginPage } from "../hooks/user/useLoginPage";

export function LoginUserPage() {
  const { onSubmit } = useLoginPage();

  return (
    <>
      <h1>Login User</h1>
      <LoginForm actionOnSubmit={onSubmit} />
    </>
  );
}
