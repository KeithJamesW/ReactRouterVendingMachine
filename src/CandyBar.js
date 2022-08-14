import React, { useState } from "react";
import candyImg from "./Candy.jpg";
import { Link } from "react-router-dom";
import Message from "./Message.js";
import "./Candybar.css";

function Candybar() {

  const [bars, setBars] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBars(prevBars => [...prevBars, { x, y }]);
  }

  const b = bars.map((bar, i) => (
    <img
      key={i}
      src={candyImg}
      className="bar"
      style={{ top: `${bar.y}px`, left: `${bar.x}px` }}
      alt="Hershey bar"
    />
  ));
  return (
    <div className="Candybar">
      <Message>
        <button onClick={handleClick}>Enjoy!</button>
        <h1>
          <Link to="/">Back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default Candybar;
