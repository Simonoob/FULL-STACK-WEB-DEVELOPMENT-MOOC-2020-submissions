import React, { useState } from "react";
import "./index.css";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  );
};

const Button = ({ text, event }) => {
  return (
    <div>
      <button className="group-item" text={text} onClick={event}>
        {text}
      </button>
    </div>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>

      {good + neutral + bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <Stat text="Good" value={good} />
            <Stat text="Neutral" value={neutral} />
            <Stat text="Bad" value={bad} />
            <Stat
              text="Average"
              value={(-bad + good) / (good + neutral + bad)}
            />
            <Stat
              text="Positive feedback"
              value={(good / (good + neutral + bad)) * 100}
              addedCh="%"
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

const Stat = ({ text, value, addedCh }) => {
  return (
    <tr>
      <td>
        {text}: {value}
        {addedCh}
      </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header />
      <div className="row-wrapper">
        <Button text="Good" event={handleGood} />
        <Button text="Neutral" event={handleNeutral} />
        <Button text="Bad" event={handleBad} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
