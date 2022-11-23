import React from "react";
import "./NavBar.css";
import img from "./KcnaXGx6i.png"

function NavBar({ navClick }) {
  return (
    <div id='head'>
      <div id='image'>
        <img width="250px"
          src={img}
          alt="logo"
        />
      </div>
      <nav id="nav-bar">
        <button
          id="button-85"
          className="Technical"
          onClick={(e) => {
            navClick(e);
          }}
        >
          Technical
        </button>
        <button
          id="button-86"
          className="Behavioural"
          onClick={(e) => {
            navClick(e);
          }}
        >
          Behavioural
        </button>
        <button
          id="button-87"
          className="Random"
          onClick={(e) => {
            navClick(e);
          }}
        >
          Random
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
