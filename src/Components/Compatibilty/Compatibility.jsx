import React from "react";
import "./Compatibility.css";

const Compatibility = () => {
  return (
    <div className="compatibility">
      <div className="comp_section">
        <h1 style={{ textAlign: "center", fontSize: "4em", paddingTop:"1em" }}>History</h1>
        <h3 style={{ textAlign: "center" }}>
          <span>The PlayStation 2</span> was designed to be <span>backwards compatible</span> with
          PlayStation games.
        </h3>
        <h3 style={{ textAlign: "center" }}>
          Play your favorite PlayStation games on The PlayStation 2
        </h3>
      </div>
      <div className="display_section">
      <i class="fa-brands fa-playstation fa-10x"></i>
      </div>
    </div>
  );
};

export default Compatibility;
