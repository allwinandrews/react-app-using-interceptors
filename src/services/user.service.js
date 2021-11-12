import api from "./api";

const getUsers = () => {
  return api.get("users");
};

const UserService = {
  getUsers,
  // getUserBoard,
  // getModeratorBoard,
  // getAdminBoard,
};

export default UserService;
