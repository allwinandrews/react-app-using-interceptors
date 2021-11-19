import React from "react";

export default function Table({ rows, emptytag, className }) {
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

  const tableBody = (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
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
