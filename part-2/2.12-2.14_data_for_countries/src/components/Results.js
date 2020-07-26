import React from "react";
import Result from "./Result";
import CountryStats from "./CountryStats";

const Results = ({ itemsToShow, data, search, event }) => {
  return (
    <div>
      {itemsToShow.length === 1 ? (
        <CountryStats data={data} search={search} />
      ) : itemsToShow.length > 10 ? (
        <p>too many matches, write more</p>
      ) : (
        <ul>
          {itemsToShow.map((contry) => (
            <Result key={contry.name} name={contry.name} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
