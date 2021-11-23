import React, { useContext, useEffect, useState } from "react";

import AuthService from "../services/auth.service";
import AuthContext from "../store/auth-context";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser(authCtx.id).then((result) => {
      setUserData(result);
      setLoading(false);
    });
  }, []);

  const { id, first_name, last_name, email, avatar } = userData;

  return (
    <div className="container">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <header className="jumbotron">
            <img src={avatar} />
            <h3>
              <strong>{first_name + " " + last_name}</strong>
            </h3>
          </header>
          <p>
            <strong>Id:</strong> {id}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </>
      )}
    </div>
  );
};

export default Profile;
