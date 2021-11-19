import api from "./api";
import TokenService from "./token.service";

const register = (email, password) => {
  return api
    .post("register", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const login = (email, password) => {
  return api
    .post("login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        TokenService.setUser(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  TokenService.removeUser();
};

const getCurrentUser = (id) => {
  return api.get("users/" + id).then((response) => {
    console.log(response.data.data);

    return response.data.data;
  });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
