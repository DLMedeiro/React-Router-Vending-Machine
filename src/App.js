import "./App.css";
import React from "react";
import Popcorn from "./Popcorn";
import Candy from "./Candy";
import Oreos from "./Oreos";
import Pretzels from "./Pretzles";
import { BrowserRouter, Route, HashRouter } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div>
      <HashRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/Popcorn">
          <Popcorn />
        </Route>

        <Route exact path="/Candy">
          <Candy />
        </Route>

        <Route exact path="/Oreos">
          <Oreos />
        </Route>

        <Route exact path="/Pretzels">
          <Pretzels />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
