import React from "react";
import "./Intro.css";
import Nav  from "../Nav/Nav";



function Intro() {
  return (
    <>
      <Nav/>
    <div className="intro">
      <div className="intro__text">
        <h1>March 4 2000</h1>
        <p>
          Sony took the <span id="red">N</span>
          <span id="blue">E</span>
          <span id="aqua">X</span>
          <span id="yellow">T</span> step into the future of gaming
        </p>
      </div>
    </div>
    </>
  );
}

export default Intro;
