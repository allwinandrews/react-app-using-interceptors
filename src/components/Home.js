import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import Table from "./Layout/Table";
import styles from "./Home.module.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getUsers().then(
      (response) => {
        setUsers(response.data.data);
        setLoading(false);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        console.log(error);
        setUsers(_content);
        setLoading(false);
      }
    );
  }, []);

  const usersExists = users.length > 0;

  return (
    <div className="container">
      <header className="jumbotron">
        {loading && <h1>Loading...</h1>}
        {loading === false && usersExists && (
          <Table
            rows={users}
            emptytag={"No Users Found"}
            className={styles.table}
          />
        )}
      </header>
    </div>
  );
};

export default Home;
