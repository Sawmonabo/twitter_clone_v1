import { useAuth } from "../lib/wundergraph";
import './LoginButton.css'

const LoginButton = () => {
    const { login } = useAuth();

    return (
      <button className="btn btn-primary" onClick={login('auth0')}>
          Sign In
      </button>
    )
}

export default LoginButton
