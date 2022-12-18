import { useAuth, useUser } from "../lib/wundergraph";
import { Button } from "@mui/material";
import './LoginButton.css'

const LoginButton = () => {
  const { login } = useAuth();
  const { user, isLoading, error } = useUser();

  console.log(user);
  console.log(isLoading);
  console.log(error);
  return (
    <Button className="login-button-container" onClick={() => { login('auth0'); }}>
        Sign In
    </Button>
  )
}

export default LoginButton
