import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from "../Cards/Card/Qcard";
import ACard from "../Cards/Card/ACard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // const [type, setType] = useState("random");

  const [randomQA, setRandomQA] = useState([
    {
      question: `How do you prepare for an interview?'`,
      answer: "Flash it!!!",
    },
  ]);
  const [flip, setFlip] = useState(false);

  async function getData(id) {
    await axios
      .get(`http://localhost:3001/questions/${id}`)
      .then((response) => {
        setRandomQA(response.data.payload);
        console.log(randomQA);
      });
  }

  // function handleClick(event) {
  //   setType(event.target.text);
  // }

  async function nextClick() {
    const index = Math.floor(Math.random() * 22);
    console.log(index);
    let data = await getData(index);
    console.log("Button clicked");
    console.log(randomQA[0].question);
    return data;
  }

  function flipIt() {
    setFlip(!flip);
  }

  function handleClick() {
    nextClick();
    if (flip) {
      flipIt();
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Cards>
        <QCard id="questionCard" Qtext={randomQA[0].question} />
        <ACard
          id="answerCard"
          Atext={randomQA[0].answer}
          onClick={flipIt}
          flipped={flip}
        />
        <button onClick={handleClick}>Next Question</button>
      </Cards>
    </div>
  );
}

export default App;
