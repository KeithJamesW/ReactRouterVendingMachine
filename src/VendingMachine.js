import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message.js";
import "./VendingMachine.css";
// import vendingMachineImg from "./vendingmachine.jpg";

function VendingMachine() {
  return(
    <div class="VendingMachine">
      
      <Message>
        <h1>Please select a refreshment</h1>
      </Message>
      <Message>
        <h1><Link to="/GingerAle">Ginger Ale</Link></h1>
        <h1><Link to="/CandyBar">Candy Bar</Link></h1>
        <h1><Link to="/GummyWorms">Gummy Worms</Link></h1>a
      </Message>
    </div>
  );
}

export default VendingMachine;
