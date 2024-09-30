// src/components/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/reflections">Reflections</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/contact">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
