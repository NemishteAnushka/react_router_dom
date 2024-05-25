import React from "react";
import { Navigate } from "react-router-dom";

function RequiredLoginAuth({ children }) {
  const loginUser = false;
  if (loginUser) {
    return children;
  }
  return <Navigate to={"/login"} />;
}

export default RequiredLoginAuth;
