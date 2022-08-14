import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message.js";
import "./GummyWorms.css";

function GummyWorms() {
  return (
    <div
      className="GummyWorms"
      style={{
        backgroundImage:
          "url(https://giphy.com/gifs/trolli-weirdly-awesome-gummy-worms-blobbybarack-ToMjGpKLyQYTKmbbokM)"
      }}>
      <Message>
        <h1>Enjoy your gummy worms!</h1>
        <h1><Link to="/">Back</Link></h1>
      </Message>
    </div>
  );
}

export default GummyWorms;
