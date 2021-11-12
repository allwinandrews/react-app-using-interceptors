import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

import styles from "./Home.module.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getUsers().then(
      (response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
        setLoading(false);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setUsers(_content);
        setLoading(false);
      }
    );
  }, []);

  const usersExists = users.length > 0;

  const tableHeaders = (
    <thead>
      {usersExists ? (
        <tr>
          {["Company", "Contact", "Country"].map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      ) : (
        <th>No Users Found</th>
      )}
    </thead>
  );

  const userRows = (
    <tbody>
      {users.map((user) => {
        const { id, email, first_name, last_name } = user;
        return (
          <tr key={id}>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
          </tr>
        );
      })}
    </tbody>
  );

  return (
    <div className="container">
      <header className="jumbotron">
        {loading && <h1>Loading...</h1>}
        {loading === false && (
          <table className={styles.table}>
            {tableHeaders}
            {usersExists && userRows}
          </table>
        )}
      </header>
    </div>
  );
};

export default Home;
