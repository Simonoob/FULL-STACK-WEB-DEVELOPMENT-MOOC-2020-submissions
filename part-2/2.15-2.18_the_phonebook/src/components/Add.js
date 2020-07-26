import React from "react";

const Add = ({
  addName,
  newName,
  newNumber,
  handleNumberChange,
  handleNameChange,
}) => {
  return (
    <div>
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
            placeholder="Add a new name.."
          />
          <div>
            number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
              placeholder="Add a new number..."
            />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
