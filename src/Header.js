import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
      </Link>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;