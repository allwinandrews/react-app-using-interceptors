import React from "react";

export default function UserDetailComponent({
  avatar,
  first_name,
  last_name,
  id,
  email,
}) {
  return (
    <>
      <header className="jumbotron">
        <img src={avatar} alt="avatar" />
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
