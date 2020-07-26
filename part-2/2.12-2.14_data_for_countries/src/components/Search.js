import React from "react";

const Search = ({ search, handleSearchChange }) => {
  return (
    <div>
      <form>
        <div>
          search countries:
          <input
            value={search}
            onChange={handleSearchChange}
            placeholder="start typing here..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
