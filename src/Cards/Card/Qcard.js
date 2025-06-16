import React from "react";
import "./QCard.css";

// fn Card takes in a prop, Qtext, that updates the question
export default function Card({ Qtext }) {
  return (
    <div>
      <p>{Qtext}</p>
    </div>
  );
}
