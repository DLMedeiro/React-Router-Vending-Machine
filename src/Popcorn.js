import React from "react";
import { Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

const GummyBears = () => {
  return (
    <div>
      <Link to="/VendingMachine" className="home">
        Back to Vending Machine
      </Link>
      <h1>Popcorn</h1>
      <div className="popcorn"></div>
    </div>
  );
};

export default GummyBears;
