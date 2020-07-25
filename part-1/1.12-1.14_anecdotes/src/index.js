import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Button = ({ text, event }) => {
  return (
    <div>
      <button text={text} onClick={event}>
        {text}
      </button>
    </div>
  );
};

const Anecdote = ({ title, message }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p message={message}>{message}</p>
    </div>
  );
};

const TopAnecdote = ({ title, message, votes }) => {
  return (
    <div>
      <Anecdote title={title} message={votes > 0 ? message : "No votes yet"} />
      <p message={message}>{votes > 0 ? `Votes: ${votes}` : ""}</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * anecdotes.length)
  );

  const [votes, setVote] = useState(
    anecdotes.map((item) => (item = { item: item, itemVotes: 0 }))
  );

  const [orderedVotes, setOrder] = useState(votes.map((item) => item));

  const handleNextItem = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length));

  const handleVote = () => {
    setVote(
      votes.map((item) => item),
      votes.map((item) => [
        item === votes[selected] ? (votes[selected].itemVotes += 1) : {},
      ])
    );
    setOrder(
      orderedVotes.sort((last, next) =>
        last.itemVotes > next.itemVotes ? -1 : +1
      )
    );
  };

  return (
    <div>
      <Anecdote title="Anecdote of the day" message={anecdotes[selected]} />
      <div style={{ display: "flex" }}>
        <Button text="vote" event={handleVote} />
        <Button text="next anecdote" event={handleNextItem} />
      </div>
      <TopAnecdote
        title="Most voted anecdote"
        message={orderedVotes[0].item}
        votes={orderedVotes[0].itemVotes}
      />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
