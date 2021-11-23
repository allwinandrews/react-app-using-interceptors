import { createContext, useState, useCallback } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: ({ token }) => {},
  register: ({ id, token }) => {},
  logout: () => {},
});

const retrieveStoredToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user ? { token: user.token } : null;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  const initialToken = tokenData ? tokenData.token : null;

  const [token, setToken] = useState(initialToken);
  const [id, setId] = useState(1);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("user");
    setToken(null);
  }, []);

  const loginHandler = ({ token }) => {
    setToken(token);
  };

  const registerHandler = ({ id, token }) => {
    setToken(token);
    setId(id);
  };

  const contextValue = {
    id,
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    register: registerHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
