import React from "react";
import "./ACard.css";

export default function Card({ Atext, flipped, onClick }) {
  return (
    <div onClick={onClick}>
      {flipped ? <p>{Atext}</p> : <p id="paragraph">Show Answer</p>}
    </div>
  );
}
