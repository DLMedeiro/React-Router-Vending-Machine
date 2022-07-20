import './App.css';
import React from 'react'
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import GummyBears from './GummyBears'
import Candy from './Candy'
import Oreos from './Oreos'
import Pretzels from './Pretzles'
function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className='Navbar'>
          <Link to='/'>VendingMachine</Link>
          <Link to='/gummybears'>GummyBears</Link>
          <Link to='/Candy'>Candy</Link>
          <Link to='/Oreos'>Oreos</Link>
          <Link to='/Pretzels'>Pretzels</Link>
        </nav>

        <Route exact path='/'><VendingMachine/></Route>
        
        <Route exact path='/gummybears'><GummyBears/></Route>
        
        <Route exact path='/Candy'><Candy/></Route>
        
        <Route exact path='/Oreos'><Oreos/></Route>

        <Route exact path='/Pretzels'><Pretzels/></Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
