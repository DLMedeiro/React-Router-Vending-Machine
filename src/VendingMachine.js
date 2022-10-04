import React from "react";
import "./VendingMachine.css";

import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="machine">
      <h1>Vending Machine</h1>
      <div className="options">
        <Link to="/Oreos">Oreos</Link>
        <Link to="/Candy">Candy</Link>
        <Link to="/Popcorn">Popcorn</Link>
        <Link to="/Pretzels">Pretzels</Link>
      </div>
    </div>
  );
};

export default VendingMachine;
