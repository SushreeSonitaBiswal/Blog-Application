/* eslint-disable no-unused-vars */
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '18px' }}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

