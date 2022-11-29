import React from "react";
import "./ACard.css";

export default function Card({ Atext, flipped, onClick }) {
  return (
    <div className="div1" onClick={onClick}>
      {flipped ? <p id="paragraph">{Atext}</p> : <p id="paragraph">Click here to show answer</p>}
    </div>
  );
}
