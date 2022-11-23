import React from "react";
import ps2pic from "./playstation2.1.png";
import pslogo from "./sonypslogo.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <div className="ps2-title">
        <h1>PlayStation 2</h1>
        <img src={pslogo}/>
        </div>
        <div className="spec__table">
          <div className="specs">
            <p>Emotion Engine CPU 295MHz</p>
            <p>32MB of RDRAM</p>
            <p>40GB Hard Drive</p>
            <p>VGA Port</p>
            <p>150MHz Graphics Synthesizer</p>
            <p>Dolby Digital 5.1 Sound</p>
            <p>Brand New DualShock2 Controller</p>
            <p>Backwards Compatibility</p>
            <p>DVD Player</p>
          </div>
        </div>
      </div>
      <div className="banner__right">
        <img className="ps2-console" src={ps2pic} alt="PlayStation 2" />
      </div>
    </div>
  );
}

export default Banner;
