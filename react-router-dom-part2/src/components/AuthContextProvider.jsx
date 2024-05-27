import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logged = () => {
    return setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
export default AuthContextProvider;
