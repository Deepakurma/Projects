import React, { useState, useEffect } from "react";
import Header from "./Header";
import Matter from "./Matter";
import { VscDebugRestart } from "react-icons/vsc";

function App() {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setscore] = useState(0);
  const [qcount, setqcount] = useState(1);

  useEffect(() => {
    // Check if all questions are finished
    if (currentquestion === Matter.length) {
      // Hide questions and answers, display "Completed" message
      document.getElementById("anq").style.display = "none";
      document.getElementById("display2").innerText = "Completed";
    }
  }, [currentquestion]);

  function handleAnswer(iscorrect) {
    console.log("clicked");
    if (iscorrect) {
      const element = document.getElementById("display");
      element.style.background = "green";
      element.innerHTML = "Correct";
      setcurrentquestion(currentquestion + 1);
      setscore(score + 10);
      setqcount(qcount + 1);
    } else {
      const element = document.getElementById("display");
      element.style.background = "red";
      element.innerHTML = "Wrong";
      setcurrentquestion(currentquestion + 1);
      setqcount(qcount + 1);
    }
  }

  function handleBack() {
    const handlebackq = qcount;
    if (handlebackq > 1) {
      setcurrentquestion(currentquestion - 1);
      const element = document.getElementById("display");
      element.style.background = "";
      element.innerHTML = "";
      setscore(0);
      setqcount(qcount - 1);
      alert("All your progress will be lost");
    }
  }

  function handleRestart() {
    setcurrentquestion(0);
    const element = document.getElementById("display");
    element.style.background = "";
    element.innerHTML = "";
    setscore(0);
    setqcount(1);
    // Show questions and answers
    document.getElementById("anq").style.display = "flex";
    // Clear the "Completed" message
    document.getElementById("display2").innerText = "";
  }

  return (
    <div className="container">
      <div className="head-container">
        <Header />
      </div>

      <div className="score">Score: {score}</div>

      <div className="qcount">Question {qcount} of 6</div>

      <button className="restart" onClick={handleRestart}>
        <VscDebugRestart size="30px" />
      </button>

      <div className="display">
        <h1 id="display"></h1>
      </div>
      <div className="display2">
        <h1 id="display2"></h1>
      </div>

      <div className="answers-questions" id="anq">
        {currentquestion < Matter.length && (
          <div>
            <div className="questionns">{Matter[currentquestion].question}</div>
            <div className="answers">
              {Matter[currentquestion].answeroptions.map((ans, i) => {
                return (
                  <button
                    id="but"
                    key={i}
                    onClick={() => handleAnswer(ans.iscorrect)}
                  >
                    {ans.option}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {currentquestion > 0 && (
        <button className="endb" onClick={handleBack}>
          Back
        </button>
      )}
    </div>
  );
}

export default App;

