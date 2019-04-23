import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h1>Louise Lahive</h1>
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
