import React, { useEffect, useState } from "react";
import LoginButton from "./LoginButton";
import { useAuth } from "../lib/wundergraph";
import './Auth.css';


function Auth() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    const { login } = useAuth();  
   
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
