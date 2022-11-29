/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./NavBar.css";
import img from "./KcnaXGx6i.png";

/*
 * this fn takes in a prop, navClick
 */
function NavBar({ navClick }) {
  return (
    // logo image
    <div id="head">
      <div id="image">
        <img src={img} alt="logo" />
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
