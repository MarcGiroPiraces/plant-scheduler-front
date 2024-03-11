import { useLoginPage } from "../hooks/useLoginPage";
import { LoginForm } from "../user/components/LoginForm";

export function LoginUserPage() {
  const { onSubmit } = useLoginPage();

  return (
    <>
      <h1>Login User</h1>
      <LoginForm actionOnSubmit={onSubmit} />
    </>
  );
}
