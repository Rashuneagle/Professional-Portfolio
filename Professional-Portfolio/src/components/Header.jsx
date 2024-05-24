import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Michael Scott</h1>
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="active" exact>About Me</NavLink></li>
          <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeclassname="active">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
