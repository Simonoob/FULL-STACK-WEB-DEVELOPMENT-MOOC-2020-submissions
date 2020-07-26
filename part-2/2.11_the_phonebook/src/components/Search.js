import React from "react";

const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      <p>search</p>
      <input
        value={search}
        onChange={handleSearchChange}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default Search;
