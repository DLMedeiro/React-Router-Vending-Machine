import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <Link to="/VendingMachine" className="home">
        Back to Vending Machine
      </Link>
      <h1>Candy</h1>
      <div className="candy"></div>
    </div>
  );
}

export default Candy;
