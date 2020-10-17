import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';
import About from "./About.jsx";

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-light">
      <Link to="/">
        <a id="wa" className="navbar-brand" href="#">          
          Weather App
        </a>
      </Link>
      <Link to='/about'>
        <span id="about">About</span>
      </Link>
      <SearchBar onSearch={onSearch} className="form-inline"/>
    </nav>
  );
};

export default Nav;
