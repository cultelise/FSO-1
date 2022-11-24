import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";
import Anecdotes from "./components/Anecdotes";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allStats, setAll] = useState(0);

  let someStats;
  if (allStats === 0) {
    someStats = "hide";
  } else someStats = "show";

  let noStats;
  if (allStats === 0) {
    noStats = "show";
  } else noStats = "hide";

  const incrementAll = () => {
    setAll(allStats + 1);
  };

  const incrementGood = () => {
    incrementAll();
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    incrementAll();
    setNeutral(neutral + 1);
  };

  const incrementBad = () => {
    incrementAll();
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={incrementGood} text="good" />
      <Button onClick={incrementNeutral} text="neutral" />
      <Button onClick={incrementBad} text="bad" />
      <h2>statistics</h2>
      <div className={noStats}>No feedback given</div>
      <div className={someStats}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allStats={allStats}
        />
      </div>
      <Anecdotes />
    </div>
  );
};

export default App;
