import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const Pagination = React.memo(({ pageCount, activeNumber }) => {
  const renderPageNumbers = useCallback(() => {
    let renderPageNumbers = [];

    for (let i = 0; i < pageCount; i++) {
      renderPageNumbers.push(
        <li
          key={`${pageCount} ${i + 1}`}
          className={parseInt(activeNumber) === i + 1 ? "active" : ""}
        >
          <Link to={`/home/page=${i + 1}`} className="navbar-brand">
            <span>{i + 1}</span>
          </Link>
        </li>
      );
    }
    return renderPageNumbers;
  }, [pageCount, activeNumber]);

  let pageNumberComponent = renderPageNumbers();

  return (
    <div className="pagination-wrapper">
      <ul className="pagination">
        {activeNumber - 1 > 0 && (
          <li key={`${pageCount} aa`}>
            <Link
              to={`/home/page=${activeNumber - 1}`}
              className="navbar-brand"
            >
              <span>{"<  "}</span>
            </Link>
          </li>
        )}
        {pageNumberComponent}
        {activeNumber < pageNumberComponent.length && (
          <li key={`${pageCount} zz`}>
            <Link
              to={`/home/page=${parseInt(activeNumber) + 1}`}
              className="navbar-brand"
            >
              <span>{"  >"}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
});

export default Pagination;
