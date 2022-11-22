import "./App.css";
import NavBar from "../NavBar/NavBar";
import Cards from "../Cards/Cards";
import QCard from '../Cards/Card/Qcard';
import ACard from '../Cards/Card/ACard';
import { useState } from "react";

function App() {
  // const [type, setType] = useState("random");
  
  const [randomQA, setRandomQA] = useState({question : `How do you learn to code?'`, answer: 'Flash it!!!'});
  const [flip, setFlip] = useState(false);

  async function getRandomQuestion () {

    

  }

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

  // function handleClick(event) {
  //   setType(event.target.text);
  // }

  function nextClick() {
    let data = getData();
    console.log("Button clicked");
    return data;
  }

  function flipIt () {
    setFlip(!flip);
  }

  function handleClick () {
    nextClick();
    if (flip) {
      flipIt();
    }
  }


  return (
    <div className="App">
      <NavBar />
      <Cards question={randomQA.question} answer={randomQA.answer} nextClick={nextClick}>
        <QCard id='questionCard' Qtext = {randomQA.question}/>
        <ACard id='answerCard' Atext = {randomQA.answer} onClick = {flipIt} flipped = {flip}/>
        <button onClick ={handleClick} >Next Question</button>
      </Cards>
    </div>
  );
}

export default App;
