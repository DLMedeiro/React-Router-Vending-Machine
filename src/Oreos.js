import React from "react";
import { Link } from "react-router-dom";

function Oreos() {
  return (
    <div>
      <Link to="/" className="home">
        Back to Vending Machine
      </Link>
      <h1>Oreos</h1>
      <div className="oreos"></div>
    </div>
  );
}

export default Oreos;
