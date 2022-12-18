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

    if (true) {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
                <div className="d-grid gap-2 mt-3">
                  <LoginButton/>
                </div>
            </div>
          </form>
        </div>
      )
    }
  }
export default Auth;
