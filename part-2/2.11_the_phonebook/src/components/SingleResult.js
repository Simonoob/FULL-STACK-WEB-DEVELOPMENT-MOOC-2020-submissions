import React from "react";

const SingleResult = ({ name, number }) => {
  return (
    <div>
      <li>
        {name} {number}
      </li>
    </div>
  );
};

export default SingleResult;
