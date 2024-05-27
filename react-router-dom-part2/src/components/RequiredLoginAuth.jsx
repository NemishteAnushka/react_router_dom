import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

function RequiredLoginAuth({ children }) {
  // useLocation Hook:
  // This hook returns the location object used by the react-router. This object represents the current URL and is immutable. Whenever the URL changes, the useLocation() hook returns a newly updated location object.
  const location = useLocation();
  console.log(location);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace
      state={{ previousPath: location.pathname }}
    />
  );
}

export default RequiredLoginAuth;
