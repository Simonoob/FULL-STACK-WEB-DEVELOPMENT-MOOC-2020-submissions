import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Add from "./Add";
import Results from "./Results";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  let itemsToShow =
    search !== ""
      ? persons.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
      : persons;

  const addName = (e) => {
    e.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };

    const personPresent = persons.some((person) => {
      return person.name === personObj.name;
    });

    personPresent
      ? alert(`${personObj.name} has already been added to the phonebook`)
      : setPersons(persons.concat(personObj));

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Search search={search} handleSearchChange={handleSearchChange} />

      <Add
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        handleNameChange={handleNameChange}
      />

      <Results itemsToShow={itemsToShow} />
    </div>
  );
};

export default App;
