import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  // const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  const maximumTime = 10;
  const [timeRemaining, setTimeRemaining] = useState(maximumTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(maximumTime => maximumTime > 0 ? maximumTime - 1 : maximumTime = 10);
      // console.log(timeRemaining)
    }, 1000);
    

    return () => {
      clearTimeout(intervalId);
      // console.log("cleanup")
    };
  }, [timeRemaining]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  if (timeRemaining === 0) {
    onAnswered(false)
    return <p>Loading...</p>
  }

  const { id, prompt, answers, correctIndex } = question; 

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
