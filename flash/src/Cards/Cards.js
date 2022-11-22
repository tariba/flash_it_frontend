import React, { useState } from "react";

function Cards({ question, answer, nextClick }) {
  const [flip, setFlip] = useState(false);
  return (
    <section className="cards">
      <div className="question-card">
        <p>{question}</p>
      </div>
      <div className="answer-card" onClick={() => setFlip(!flip)}>
        {flip ? <p>{answer}</p> : <p>Click here for answer</p>}
      </div>
      <button onClick={nextClick}>Next Question</button>
    </section>
  );
}

export default Cards;
