// Auth Context// Auth Context// Auth Context

import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(sessionStorage.getItem("user")|| false);

  useEffect(() => {
   
  sessionStorage.setItem("user",user)
   
  }, [user])
  

  return (
    <AuthContext.Provider value={{ user ,  setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;