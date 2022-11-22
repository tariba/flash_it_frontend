import React, { useState } from "react";


// question, answer, nextClick
function Cards({ children }) {
  // const [flip, setFlip] = useState(false);
  return (
    <section className="cards">
      {children}
    </section>
  );
}

export default Cards;
