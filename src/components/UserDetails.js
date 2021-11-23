import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthService from "../services/auth.service";
import UserDetailComponent from "./UserDetailComponent";

export default function UserDetails() {
  const { userId } = useParams();

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AuthService.getCurrentUser(userId).then((result) => {
      setUserData(result);
      setLoading(false);
    });
  }, [userId]);

  const { first_name, last_name, email, avatar } = userData;

  return (
    <div className="container">
      {isNaN(parseInt(userId)) && <h2>Invalid User ID</h2>}
      {!isNaN(parseInt(userId)) && loading ? (
        <h2>Loading...</h2>
      ) : (
        <UserDetailComponent
          avatar={avatar}
          first_name={first_name}
          last_name={last_name}
          id={userId}
          email={email}
        />
      )}
    </div>
  );
}
