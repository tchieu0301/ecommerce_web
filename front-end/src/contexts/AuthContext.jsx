import React, { useState } from "react";
import { createContext, useContext } from "react";
//import { useCookies } from "react-cookie";
export const AuthContext = createContext(null);
export const AuthProvider = (props) => {
  const { children } = props;
  const [isLogin, setLogin] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
