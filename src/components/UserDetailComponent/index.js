import React, { useState } from "react";
import LoadingSpinner from "../Layout/LoadingSpinner";

export default function UserDetailComponent({
  avatar,
  first_name,
  last_name,
  id,
  email,
}) {
  const [isImageLoad, setIsImageLoad] = useState(true);

  const handleImageLoad = () => setIsImageLoad(false);

  return (
    <>
      <header className="jumbotron">
        {isImageLoad && <LoadingSpinner />}
        <img src={avatar} alt="avatar" onLoad={handleImageLoad} />
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
  );
}
