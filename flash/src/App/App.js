import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import { useState } from "react";

function App() {
  // const [type, setType] = useState("random");
  let question = "";
  let answer = "";

  // let [question, setQuestion] = useState("");
  // let [answer, setAnswer] = useState("");

  let [randomQA, setRandomQA] = useState({});

  let flashcards = [
    { id: "abc1", question: "question1", answer: "answer1" },
    { id: "abc1", question: "question2", answer: "answer2" },
    { id: "abc1", question: "question3", answer: "answer3" },
  ];

  function getData() {
    //const response = await fetch(`URL/type=${type}`);
    const index = Math.floor(Math.random() * flashcards.length);
    //const data = await response.json();
    setRandomQA(flashcards[index]);
  }

  question = getData().question;
  answer = getData().answer;

  // function handleClick(event) {
  //   setType(event.target.text);
  // }

  function nextClick() {
    let data = getData();
    console.log("Button clicked");
    return data;
  }

  return (
    <div className="App">
      <NavBar />
      <Cards question={question} answer={answer} nextClick={nextClick}></Cards>
    </div>
  );
}

export default App;
