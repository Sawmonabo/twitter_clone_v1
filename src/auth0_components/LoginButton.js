import { useAuth, useUser } from "../lib/wundergraph";
import './LoginButton.css'

const LoginButton = () => {
  const { login } = useAuth();
  const { user, isLoading, error } = useUser();

  console.log(user);
  console.log(isLoading);
  console.log(error);
  return (
    <button className="login-button-container" onClick={() => { login('auth0'); }}>
        Sign In
    </button>
  )
}

export default LoginButton
