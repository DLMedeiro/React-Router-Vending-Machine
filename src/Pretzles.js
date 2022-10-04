import React from "react";
import { Link } from "react-router-dom";

function Pretzels() {
  return (
    <div>
      <Link to="/React-Router-Vending-Machine" className="home">
        Back to Vending Machine
      </Link>
      <h1>Pretzels</h1>
      <div className="pretzels"></div>
    </div>
  );
}
export default Pretzels;
