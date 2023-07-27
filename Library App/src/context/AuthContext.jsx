// Auth Context// Auth Context// Auth Context

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);

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