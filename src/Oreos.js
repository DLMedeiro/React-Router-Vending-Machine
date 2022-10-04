import React from "react";
import { Link } from "react-router-dom";

function Oreos() {
  return (
    <div>
      <Link to="/React-Router-Vending-Machine" className="home">
        Back to Vending Machine
      </Link>
      <h1>Oreos</h1>
      <div className="oreos"></div>
    </div>
  );
}

export default Oreos;
