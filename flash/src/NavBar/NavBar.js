import React from "react";
import "./NavBar.css";

function NavBar({ navClick }) {
  return (
    <div>
      <div>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <nav className="nav-bar">
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
