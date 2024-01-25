import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    isLoading,
    loginUser,
    logoutUser,
    setIsLoading,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useUserContext };
