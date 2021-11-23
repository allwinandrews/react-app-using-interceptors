import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table({ rows, emptytag, className }) {
  const navigate = useNavigate();

  const tableHeaders = (
    <thead>
      {rows.length ? (
        <tr>
          {Object.entries(rows[1]).map((item) => (
            <th key={item[0] + item[1]}>{item[0]}</th>
          ))}
        </tr>
      ) : (
        <th>{emptytag}</th>
      )}
    </thead>
  );

  const handleRowClick = (id) => {
    navigate(`/user/${id}`);
  };

  const tableBody = (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} onClick={() => handleRowClick(row.id)}>
          {Object.entries(row).map((item) => (
            <td key={item[0] + item[1]}>{item[1]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={className}>
      {tableHeaders}
      {tableBody}
    </table>
  );
}
