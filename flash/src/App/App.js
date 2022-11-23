import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from "../Cards/Card/Qcard";
import ACard from "../Cards/Card/ACard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [type, setType] = useState();
  const [data, setData] = useState();

  const [randomQA, setRandomQA] = useState({
    question: `How do you prepare for an interview?'`,
    answer: "Flash it!!!",
  });
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:3001/questions`).then((response) => {
        setData(response.data.payload);
      });
    }
    getData();
  }, []);
  console.log("this is our data", data);

  function navClick(event) {
    setType(event.target.className);
    console.log(type);
  }

  async function nextClick() {
    setType("Technical");
    const result = data.filter((object) => object.subject === type);
    console.log("this is the result", result);
    const index = Math.floor(Math.random() * result.length);
    console.log(data, result, result[index]);
    let resultObject = result[index];
    console.log("what are you?", resultObject);
    setRandomQA(resultObject);
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
      <NavBar navClick={navClick} />

      <Cards>
        <QCard id="questionCard" Qtext={randomQA.question} />
        <ACard
          id="answerCard"
          Atext={randomQA.answer}
          onClick={flipIt}
          flipped={flip}
        />
        <button onClick={handleClick}>Next Question</button>
      </Cards>
    </div>
  );
}

export default App;
