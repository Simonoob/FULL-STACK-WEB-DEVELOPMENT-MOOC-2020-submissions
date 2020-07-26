import React from "react";

const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      search:
      <input
        value={search}
        onChange={handleSearchChange}
        placeholder="Type a name..."
      />
    </div>
  );
};

export default Search;
