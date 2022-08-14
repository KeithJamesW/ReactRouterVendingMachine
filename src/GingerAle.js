import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message.js";
import gingerImage from "./Gingerale.jpg";
import "./Gingerale.css";

function Gingerale() {
  return (
    <div className="Gingerale">
      <img src={gingerImage} alt="gingerale" />
      <Message>
        <h1>Your gingerale!</h1>
        <h1><Link to="/">Back</Link></h1>
      </Message>
      <img src={gingerImage} alt="gingerale" />
    </div>
  );
}

export default Gingerale;
