import React from "react";
import "./Banner2.css";
import gtasanpng from "./gtasan.png"
import sa_trailer from "./videoplayback.mp4"

function Banner() {
  return (
    <div className="banner2">
      <div className="banner_left">
          <div className="gta">
            <h2 style={{textAlign:"center"}}>The Best Sold Game on the PlayStation® 2</h2>
            <p style={{textAlign:"center"}}>Grand Theft Auto : San Andreas</p>
        </div>
      </div>
      <div className="banner_right">
        <img id="sa_png" src={gtasanpng} alt="" />
        <video id="game_trailer" muted autoPlay src={sa_trailer}/>
      </div>
    </div>
  );
}

export default Banner;
