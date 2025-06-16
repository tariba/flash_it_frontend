import React from "react";

// passing children from app.js
function Cards({ children }) {
  return <div className="cards">{children}</div>;
}

export default Cards;
