import React from "react";
import "./Name.css";

export default function Name(props) {
  return (
    <>
      <div className="name-container">
        <p>HI I Am</p>
        <h2 className="name">{props.name}</h2>
        <button>Download CV</button>
      </div>
    </>
  );
}
