import React, { useState, useEffect } from "react";
import Search from "./Search";
import Add from "./Add";
import Results from "./Results";
import numbers from "./../services/numbers";
import Notification from "./Notification";
import "./../index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

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
        numbers
          .update(obj.id, { ...obj, number: newNumber })
          .then((res) =>
            setPersons(
              persons.map((person) => (person.id !== obj.id ? person : res))
            )
          );
        setMessage(`${obj.name} information updated`);
      }
    } else {
      numbers.create(personObj).then((res) => setPersons(persons.concat(res)));
      setMessage(`${personObj.name} added`);
    }
    setNewName("");
    setNewNumber("");
    setTimeout(() => {
      setMessage("");
    }, 3000);
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
      const obj = persons.find(
        (person) => person.name === e.target.parentNode.firstChild.innerText
      );

      numbers
        .deletePerson(obj.id)
        .then((res) => {
          setMessage(`Deleted ${obj.name}`);
        })
        .catch((err) => {
          setMessage(`${obj.name} has been already deleted from the server`);
        });

      setPersons(persons.filter((person) => person.name !== obj.name));

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />

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
