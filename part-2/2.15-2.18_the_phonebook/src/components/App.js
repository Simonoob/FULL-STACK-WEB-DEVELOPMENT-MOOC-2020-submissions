import React, { useState, useEffect } from "react";
import Search from "./Search";
import Add from "./Add";
import Results from "./Results";
import numbers from "./../services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    numbers.getAll().then((response) => {
      setPersons(response);
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

    if (personPresent) {
      if (
        window.confirm(
          `${personObj.name} has already been added to the phonebook, replace the old number with the new one?`
        )
      ) {
        const obj = persons.find((person) => person.name === newName);
        numbers.update(obj.id, { ...obj, number: newNumber });
        setPersons(persons.filter((person) => person.id !== obj.id));
      }
    } else {
      setPersons(persons.concat(personObj));
      numbers.create(personObj);
    }

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

  const handleDelete = (e) => {
    if (window.confirm(`Delete ${e.target.parentNode.firstChild.innerText}?`)) {
      numbers.deletePerson(
        persons.find(
          (person) => person.name === e.target.parentNode.firstChild.innerText
        ).id
      );
      setPersons(
        persons.filter(
          (person) => person.name !== e.target.parentNode.firstChild.innerText
        )
      );
    }
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

      <Results itemsToShow={itemsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
