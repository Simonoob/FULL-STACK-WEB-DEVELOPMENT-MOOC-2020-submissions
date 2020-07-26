import React from "react";
import "./../index.css";

const Result = ({ name, event }) => {
  return (
    <div className="flex">
      <li>{name}</li>
      <button onClick={event}>show</button>
    </div>
  );
};

export default Result;
