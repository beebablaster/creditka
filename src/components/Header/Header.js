import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import './Header.css';
import Card from '../Card/Card.js'
import Table from '../Table/Table.js'


const Header = () => {
  return(
  <div className="wrapper">
    <BrowserRouter>
    <nav id="navbar">
          <ul>
            <li><Link to="newcard" className="link-text">Create New Card</Link></li>
            <li><Link to="cards" className="link-text">View Cards</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/newcard" element={<Card/>}/>
        <Route path="/cards" element={<Table/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  ) 
  }

export default Header;
