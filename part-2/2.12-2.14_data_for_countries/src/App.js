import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Results from "./components/Results";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setData(response.data);
    });
  }, []);

  let itemsToShow = data
    ? data.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = (e) => {
    setSearch(e.target.previousSibling.innerText);
  };

  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <div>
        {search !== "" ? (
          <Results
            itemsToShow={itemsToShow}
            data={data}
            search={search}
            event={handleShow}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
