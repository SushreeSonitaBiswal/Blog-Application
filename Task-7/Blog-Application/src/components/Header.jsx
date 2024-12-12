/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>My Blog</Link>
      </h1>
      <p style={{ margin: 0, fontSize: '18px' }}>Welcome to the world of blogging!</p>
    </header>
  );
};

export default Header;
