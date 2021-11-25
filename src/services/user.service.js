import api from "./api";

const getUsers = (page) => {
  return api.get(`users?page=${page}`);
};

const UserService = {
  getUsers,
  // getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};

export default UserService;
