import React from 'react';
import './nav.css';
import logo from './logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove logged in status
    navigate('/'); // Navigate to Login
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="NeuroLens Logo" /> NeuroLens
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        {isLoggedIn ? (
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/Form" className="nav-link">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
