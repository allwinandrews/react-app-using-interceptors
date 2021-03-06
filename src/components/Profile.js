import React, { useContext, useEffect, useState } from "react";

import AuthService from "../services/auth.service";
import AuthContext from "../store/auth-context";

import UserDetailComponent from "./UserDetailComponent";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser(authCtx.id).then((result) => {
      setUserData(result);
      setLoading(false);
    });
  }, [authCtx.id]);

  const { id, first_name, last_name, email, avatar } = userData;

  return (
    <div className="container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <UserDetailComponent
          avatar={avatar}
          first_name={first_name}
          last_name={last_name}
          id={id}
          email={email}
        />
      )}
    </div>
  );
};

export default Profile;
