import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>My react-route app</h1>
      <nav>
        <ul>
          <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/news">News</Link></li>
          </div>
          <div>
            <li><Link to="/login">Login</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;