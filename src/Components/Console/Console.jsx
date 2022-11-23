import React from "react";
import { useEffect } from "react";
import "./Console.css";

const Console = () => {
  const changeColor = () => {
    let colorButtons = document.querySelectorAll(".changecolor");
    let consoleImage = document.querySelector("#ps2Console");
    let rightSection = document.querySelector(".right-section");
    colorButtons.forEach((btn) => {
      btn.onclick = (e) => {
        e.preventDefault();
        rightSection.style.transition = "all 0.1s ease-in";
        consoleImage.src = `fotos/${e.target.id}.png`;
        consoleImage.style.transition = "all 0.01s ease-in";
        rightSection.style.backgroundColor = `${e.target.id}`;
      };
    });
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <div className="console">
      <div className="top-section">
        <div className="left-section">
          <h1 style={{ fontSize: "3em" }}>
            Presenting <br /> The PlayStation® 2
          </h1>
          <div className="ps2_descr2">
            <h3>Sony Computer Entertainment , 2000</h3>
            <p>
              The PlayStation® 2 is a home video game console developed by Sony
              Computer Entertainment. It was first released in Japan on March 4
              2000 and is the successor to the original PlayStation and is the
              second installment in the PlayStation brand of consoles.
            </p>
            <p>Available colors :</p>
          </div>
          <div className="colors-section">
            <button
              style={{ backgroundColor: "black" }}
              className="changecolor"
              id="black"
            ></button>
            <button
              style={{ backgroundColor: "silver" }}
              className="changecolor"
              id="silver"
            ></button>
            <button
              style={{ backgroundColor: "grey" }}
              className="changecolor"
              id="grey"
            ></button>
            <button
              style={{ backgroundColor: "red" }}
              className="changecolor"
              id="red"
            ></button>
            <button
              style={{ backgroundColor: "blue" }}
              className="changecolor"
              id="blue"
            ></button>
            <button
              style={{ backgroundColor: "yellow" }}
              className="changecolor"
              id="yellow"
            ></button>
          </div>
        </div>
        <img id="ps2Console" src="fotos/black.png" alt="ps2-console" />
        <div className="right-section"></div>
      </div>
      <div className="bottom-section">
        <div className="specifications">
          <table style={{ width: "100%", color: "white" }}>
            <thead>
              <tr>
                <th>
                  <i className="fa-solid fa-microchip fa-4x"></i>
                </th>
                <th>
                  <i className="fa-solid fa-memory fa-4x"></i>
                </th>
                <th>
                  <i className="fa-solid fa-hard-drive fa-4x"></i>
                </th>
                <th>
                  <i className="fa-solid fa-tv fa-4x"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emotion Engine CPU 295MHz</td>
                <td>32 MB of RDRAM</td>
                <td>40 GB Hard Drive</td>
                <td>150 MHz Graphics Synthesizer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Console;
