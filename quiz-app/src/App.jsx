import React from "react";
import { useState } from "react";
import Header from "./Header";
import Matter from "./Matter";

function App() {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ans, setans] = useState(0);
  const [res, setres] = useState(false);

  function clickNext() {
    const nextquestion = currentquestion + 1;
    if (nextquestion < 6) {
      setcurrentquestion(nextquestion);
    } else {
      setres(true);
    }
  }

  function handleAnswer(iscorrect) {
    if (iscorrect) {
    const element = document.getElementById("container");
    element.style.background = "green";
      setScore(score + 5);
      setans(ans + 1);
      setcurrentquestion(currentquestion +1);
    }else {
      const element = document.getElementById("container");
      element.style.background = "red";
    }
  }


      
  
  /*------------------------------------------------------------------------------------------------------------------*/
  return (
    <div className="container" id="container">
      <div className="head-container">
        <Header />
      </div>

      <div className="result-container">
        <div className="result">
          <h4>Total score: {score}</h4>
          <h4>Your score is {ans}</h4>
        </div>
      </div>

      <div className="score">Score: {score}</div>
      <div className="q-count">
        <span>Question {currentquestion + 1} of 6</span>
      </div>

      <div className="questions-container">
        {Matter[currentquestion].question}
      </div>
      <div className="answer-container">
        {Matter[currentquestion].answeroptions.map((ans, i) => {
          return (
            <button id="anss" key={i} onClick={() => handleAnswer(ans.iscorrect)}>
              {ans.option}
            </button>
          );
        })}
      </div>
      <div className="next">
        <button onClick={clickNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
