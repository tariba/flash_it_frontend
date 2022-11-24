import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from "../Cards/Card/Qcard";
import ACard from "../Cards/Card/ACard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [subjectState, setSubjectState] = useState("Random");
  const [data, setData] = useState();

  const [randomQA, setRandomQA] = useState({
    question: `How do you prepare for an interview?`,
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

  // console.log("this is our data", data);

  function navClick(event) {
    if (flip) {
      flipIt();
    }
    let subject = event.target.className;
    // console.log('this is even.target.className', subject);
    // console.log('this is chosen', chosen);
    if (subject === "Random") {
      const result = data.filter(
        (object) =>
          object.subject === "Technical" || object.subject === "Behavioural"
      );
      // console.log("this is the result", result);
      const index = Math.floor(Math.random() * result.length);
      // console.log(data, result, result[index]);
      let resultObject = result[index];
      // console.log("what are you?", resultObject);
      setRandomQA(resultObject);
      setSubjectState(subject);
    } else {
      const result = data.filter((object) => object.subject === subject);
      // console.log("this is the result", result);
      const index = Math.floor(Math.random() * result.length);
      // console.log(data, result, result[index]);
      let resultObject = result[index];
      // console.log("what are you?", resultObject);
      setRandomQA(resultObject);
      setSubjectState(subject);
    }
  }

  async function nextClick() {
    if (subjectState === "Random") {
      let arr = ["Technical", "Behavioural"];
      let chosen = arr[Math.floor(Math.random() * arr.length)];
      const result = data.filter((object) => object.subject === chosen);
      // console.log("this is the result", result);
      const index = Math.floor(Math.random() * result.length);
      // console.log(data, result, result[index]);
      let resultObject = result[index];
      // console.log("what are you?", resultObject);
      setRandomQA(resultObject);
    } else {
      const result = data.filter((object) => object.subject === subjectState);
      // console.log("this is the result", result);
      const index = Math.floor(Math.random() * result.length);
      // console.log(data, result, result[index]);
      let resultObject = result[index];
      // console.log("what are you?", resultObject);
      setRandomQA(resultObject);
    }
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
  // console.log('this is the randomQA', randomQA);
  return (
    <div className="App">
      <NavBar navClick={navClick} />
      <Cards id="cards">
        <div id="card-holder">
          <QCard id="questionCard" Qtext={randomQA.question} />
          <ACard
            id="answerCard"
            Atext={randomQA.answer}
            onClick={flipIt}
            flipped={flip}
          />
        </div>
        <button id="button-64" onClick={handleClick}>
          <span>Next Question</span>
        </button>
      </Cards>
    </div>
  );
}

export default App;
