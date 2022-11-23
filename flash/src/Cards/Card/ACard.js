import React from "react";
import "./ACard.css";

export default function Card({ Atext, flipped, onClick }) {
  return (
    <div onClick={onClick} id="">
      {flipped ? <p>{Atext}</p> : <p>Show Answer</p>}
    </div>
  );
}
