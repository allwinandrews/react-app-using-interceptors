import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import UserService from "../services/user.service";
import Table from "./Layout/Table";
import Pagination from "./Pagination";
import styles from "./Home.module.css";

const Home = React.memo(() => {
  const { pageNumber } = useParams();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const ifPageNumIsNan = isNaN(parseInt(pageNumber));
  const currentPage = ifPageNumIsNan ? 1 : pageNumber;

  useEffect(() => {
    UserService.getUsers(currentPage).then(
      (response) => {
        setTotalPages(response.data.total_pages);
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
  }, [currentPage]);

  const usersExists = users.length > 0;

  return ifPageNumIsNan ? (
    <Navigate to={`/home/page=${currentPage}`} />
  ) : (
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
        {totalPages > 0 && (
          <Pagination pageCount={totalPages} activeNumber={currentPage} />
        )}
      </header>
    </div>
  );
});

export default Home;
