import React from "react";

// question, answer, nextClick
function Cards({ children }) {
  // const [flip, setFlip] = useState(false);
  return <div className="cards">{children}</div>;
}

export default Cards;
