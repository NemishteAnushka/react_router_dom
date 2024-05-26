import React from "react";
import { useAuth } from "../components/AuthContextProvider";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const previousPath = location.state?.previousPath || "/";
  console.log("login page", location);
  if (isLoggedIn) {
    return navigate(previousPath, { replace: true });
  }
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
