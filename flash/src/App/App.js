import "./App.css";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from "../Cards/Card/Qcard";
import ACard from "../Cards/Card/ACard";
import { useState, useEffect } from "react";


function App() {
  // change the state of the subject
  const [subjectState, setSubjectState] = useState("Random");

  // save the data when the page is loaded
  const [data, setData] = useState();

  // used to hide the answer
  const [flipped, setFlipped] = useState(false);

  const [randomQA, setRandomQA] = useState({
    question: `How do you prepare for an interview?`,
    answer: "Flash it!!!",
  });

  /*
   * a function that returns a random data object from any array passed to it
   */
  function getRandomObject(dataArr) {
    return dataArr[Math.floor(Math.random() * dataArr.length)];
  }

  /*
   * a fn that filters the data inside the array and return an object with a specific subject
   */
  function filterArrBySubject(dataArr, subject) {
    return dataArr.filter((object) => object.subject === subject);
  }

  // used axios instead of fetch
  useEffect(() => {
    async function getData() {
      await axios.get(`https://flash-it-backend.onrender.com/questions`).then((response) => {
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
    if (flipped) {
      flipAnswerCard();
    }
    // get the className of the clicked button
    let subject = event.target.className;
    // if Random button is clicked return technical and behavioural questions
    if (subject === "Random") {
      let resultObject = getRandomObject(data);
      // set the states
      setRandomQA(resultObject);
      setSubjectState(subject);
    } else {
      // if the subject is not random, filter the data by subject
      const resultArr = filterArrBySubject(data, subject);
      let resultObject = getRandomObject(resultArr);
      // set the states
      setRandomQA(resultObject);
      setSubjectState(subject);
    }
  }

  /*
   * a function that sets the random QA object based on subject's state
   */
  async function nextClick() {
    if (subjectState === "Random") {
      let resultObject = getRandomObject(data);
      setRandomQA(resultObject);
    } else {
      const resultArr = filterArrBySubject(data, subjectState);

      let resultObject = getRandomObject(resultArr);
      setRandomQA(resultObject);
    }
  }

  /*
   * a function that changes the answer flipped state (shows/hides the answer)
   */
  function flipAnswerCard() {
    setFlipped(!flipped);
  }

  /*
   * a function that runs nextClick fn once async state has resolved and changes flip state if necessary
   */
  function handleClick() {
    nextClick();
    if (flipped) {
      flipAnswerCard();
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
            onClick={flipAnswerCard}
            flipped={flipped}
          />
        </div>
        <button id="button1" onClick={handleClick}>
          <span>Next Question</span>
        </button>
      </Cards>
    </div>
  );
}

export default App;
