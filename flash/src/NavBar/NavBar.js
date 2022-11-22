import React from "react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="logo">
          <img src="" alt="" />
        </li>

        <li className="technical">
          <a href="#">Technical</a>
        </li>

        <li className="behavioural">
          <a href="#">Behavioural</a>
        </li>

        <li className="random">
          <a href="#">Random</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

// onClick={() => setFlip(!flip)}>
//         {flip ? <p>{answer}</p> : <p>Click here for answer</p>}
