import React from "react";

export default function MessageComponent({ success, message }) {
  return (
    <div className="form-group">
      <div
        className={success ? "alert alert-success" : "alert alert-danger"}
        role="alert"
      >
        {message}
      </div>
    </div>
  );
}
