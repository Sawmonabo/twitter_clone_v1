import LoginButton from "./LoginButton";
import './Auth.css';


function Auth() {
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Twitter-Clone Login</h3>
            <LoginButton/>    
          </div>
        </div>
      </div>
    )

  }
export default Auth;
