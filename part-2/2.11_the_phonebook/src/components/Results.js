import React from "react";
import SingleResult from "./SingleResult";

const Results = ({ itemsToShow }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {itemsToShow.map((person) => (
          <SingleResult
            key={person.name}
            name={person.name}
            number={person.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default Results;
