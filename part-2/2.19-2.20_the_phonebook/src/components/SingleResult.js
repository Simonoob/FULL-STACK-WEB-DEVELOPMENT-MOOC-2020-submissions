import React from "react";

const SingleResult = ({ name, number, handleDelete }) => {
  return (
    <div>
      <li style={{ display: "flex", alignItems: "center" }}>
        <p>{name} </p> <p style={{ margin: "0 .5rem" }}> {number} </p>
        <button onClick={handleDelete}>delete</button>
      </li>
    </div>
  );
};

export default SingleResult;
