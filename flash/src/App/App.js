import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from "../Cards/Card/Qcard";
import ACard from "../Cards/Card/ACard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // change the state of the subject
  const [subjectState, setSubjectState] = useState("Random");

  // save the data when the page is loaded
  const [data, setData] = useState();

  // used to hide the answer
  const [flip, setFlip] = useState(false);

  const [randomQA, setRandomQA] = useState({
    question: `How do you prepare for an interview?`,
    answer: "Flash it!!!",
  });

  // used axios instead of fetch
  useEffect(() => {
    async function getData() {
      await axios.get(`http://localhost:3001/questions`).then((response) => {
        setData(response.data.payload);
      });
    }
    getData();
  }, []);

  /*
   * a function that returns the question/answer object when a button is clicked
   */
  function navClick(event) {
    // if the answer is shown, it's going to hide it
    if (flip) {
      flipIt();
    }

    // get the className of the clicked button
    let subject = event.target.className;

    // if Random button is clicked return technical and behavioural questions
    if (subject === "Random") {
      const result = data.filter(
        (object) =>
          object.subject === "Technical" || object.subject === "Behavioural"
      );

      // generate a random number to pick up a question/answer object based on the index
      const index = Math.floor(Math.random() * result.length);
      let resultObject = result[index];

      // set the states
      setRandomQA(resultObject);
      setSubjectState(subject);
    } else {
      // if the subject is not random, filter the data by subject
      const result = data.filter((object) => object.subject === subject);
      // generate a random number to pick up a question/answer object based on the index
      const index = Math.floor(Math.random() * result.length);
      let resultObject = result[index];
      // set the states
      setRandomQA(resultObject);
      setSubjectState(subject);
    }
  }

  /*
   * a function that sets the random QA object bases on subject's state
   */
  async function nextClick() {
    if (subjectState === "Random") {
      let arr = ["Technical", "Behavioural"];
      let chosen = arr[Math.floor(Math.random() * arr.length)];
      const result = data.filter((object) => object.subject === chosen);
      const index = Math.floor(Math.random() * result.length);
      let resultObject = result[index];
      setRandomQA(resultObject);
    } else {
      const result = data.filter((object) => object.subject === subjectState);
      const index = Math.floor(Math.random() * result.length);
      let resultObject = result[index];
      setRandomQA(resultObject);
    }
  }

  /*
   * a function that changes the answer flipped state (shows/hides the answer)
   */
  function flipIt() {
    setFlip(!flip);
  }

  /*
   * a function that runs nextClick fn once async state has resolved and changes flip state if necessary
   */
  function handleClick() {
    nextClick();
    if (flip) {
      flipIt();
    }
  }

  // renders the page
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
